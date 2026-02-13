import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import PlayControls from "./PlayControls";
import VolumeControls from "./VolumeControls";
import { useState, useRef, useEffect } from "react";
import type { Song } from "./App";
import LoadingSkeleton from "./LoadingSkeleton";

type PlayingProps = {
    songs: Song[];
}
type SongFile = {
    id: string;
    title: string;
    artist: string;
    genre: string;
    duration: number;
    cover: string;
    song: string;
}

export default function CurrentlyPlaying({songs}: PlayingProps){
    const [currentSongId, setSong] = useState<string | null>(
        songs.length > 0 ? songs[0].id : null
    );
    const [audioUrl, setAudioUrl] = useState<string | null>(null);
    const currentSong = songs.find((song) => song.id === currentSongId) || songs[0];
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);
    const [coverArt, setCoverArt] = useState<string | null>(null);
    const [prevDisable, setPrevDisable] = useState(false);
    const [nextDisable, setNextDisable] = useState(false);
    const [shuffle, setShuffle] = useState(false);

    if (!currentSong) return <LoadingSkeleton/>

    useEffect(() => {
        const fetchSongFile = async () => {
            try {
                const res = await fetch(`/api/v1/songs/${currentSongId}`);
                if (!res.ok) throw new Error("Failed to fetch song file");
                const data: SongFile = await res.json();
                setAudioUrl(data.song);
                setCoverArt(data.cover);
            } catch (err) {
                console.error(err);
            }
        };
        fetchSongFile();
    }, [currentSongId]);

    const togglePlay = () => {
        if (!audioRef.current) return;
        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            audioRef.current.play();
            setIsPlaying(true);
        }
    }

    const nextSong = () => {
    const currentIndex = songs.findIndex(s => s.id === currentSongId);
    if (!shuffle){
        if (currentIndex === songs.length - 1){
            setNextDisable(true);
            return;
        } else {
            setNextDisable(false);
        };
    } else {
        let randomIndex = Math.floor(Math.random() * songs.length);
        while (songs[randomIndex].id === currentSongId && songs.length > 1) {
            setSong(songs[randomIndex].id);
        }
    }
    const nextIndex = (currentIndex + 1)
    setSong(songs[nextIndex].id);
    setIsPlaying(true);
    };

    const prevSong = () => {
    const currentIndex = songs.findIndex(s => s.id === currentSongId);
    if (currentIndex === 0){
        setPrevDisable(true);
        return
    } else {
        setPrevDisable(false);
    };
    const prevIndex = currentIndex - 1;
    setSong(songs[prevIndex].id);
    setIsPlaying(true);
    };

    const shuffleToggle = () => {
        setShuffle(!shuffle)
    }

    return (
        <div className="pr-3 bg-midnight text-white">
            <CoverArt cover={coverArt}/>
            <SongTitle title={currentSong.title} artist={currentSong.artist}/>
            <PlayControls isPlaying={isPlaying} onPlayPause={togglePlay} onNext={nextSong} onPrev={prevSong} audioRef={audioRef} disabledPrev={prevDisable} disabledNext={nextDisable} shuffle={shuffleToggle} shuffleOn={shuffle}/>
            <VolumeControls audioRef={audioRef}/>
            <audio
            ref={audioRef}
            src={audioUrl || undefined}/>
        </div>
    );
}