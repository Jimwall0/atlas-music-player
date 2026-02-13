import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import PlayControls from "./PlayControls";
import VolumeControls from "./VolumeControls";
import { useState, useRef, useEffect } from "react";
import type { Song } from "./App";
import LoadingSkeleton from "./LoadingSkeleton";
import AudioPlayer from "./AudioPlayer";

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

    const updateSong = (newIndex: number) => {
        setSong(songs[newIndex].id);
        setPrevDisable(newIndex === 0);
        setNextDisable(newIndex === songs.length - 1);
        setIsPlaying(true);
    };


    const nextSong = () => {
        if (!currentSongId || songs.length === 0) return;

        const currentIndex = songs.findIndex(s => s.id === currentSongId);

        if (shuffle && songs.length > 1) {
            let randomIndex;
            do {
                randomIndex = Math.floor(Math.random() * songs.length);
            } while (randomIndex === currentIndex);
            updateSong(randomIndex);
        } else if (currentIndex < songs.length - 1) {
            updateSong(currentIndex + 1);
        } else {
            setNextDisable(true); // end of playlist
        }
    };

    const prevSong = () => {
        if (!currentSongId || songs.length === 0) return;

        const currentIndex = songs.findIndex(s => s.id === currentSongId);

        if (currentIndex > 0) {
            updateSong(currentIndex - 1);
        } else {
            setPrevDisable(true); // start of playlist
        }
    };

    const shuffleToggle = () => {
        setShuffle(!shuffle);
    };


    return (
        <div className="pr-3 bg-midnight text-white">
            <CoverArt cover={coverArt}/>
            <SongTitle title={currentSong.title} artist={currentSong.artist}/>
            <PlayControls isPlaying={isPlaying} onPlayPause={togglePlay} onNext={nextSong} onPrev={prevSong} audioRef={audioRef} disabledPrev={prevDisable} disabledNext={nextDisable} shuffle={shuffleToggle} shuffleOn={shuffle}/>
            <VolumeControls audioRef={audioRef}/>
            <AudioPlayer audioRef={audioRef} audioUrl={audioUrl}/>
        </div>
    );
}