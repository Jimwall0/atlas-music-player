import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import PlayControls from "./PlayControls";
import VolumeControls from "./VolumeControls";
import { useState, useRef, useEffect } from "react";
import type { Song } from "./App";

type PlayingProps = {
    songs: Song[];
}
type SongFile = {
    url: string;
}

export default function CurrentlyPlaying({songs}: PlayingProps){
    const [currentSongId, setSong] = useState<string | null>(
        songs.length > 0 ? songs[0].id : null
    );
    const [audioUrl, setAudioUrl] = useState<string | null>(null);
    const currentSong = songs.find((song) => song.id === currentSongId) || songs[0];
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        const fetchSongFile = async () => {
            try {
                const res = await fetch(`/api/v1/songs/${currentSongId}.json`);
                if (!res.ok) throw new Error("Failed to fetch song file");
                const data: SongFile = await res.json();
                setAudioUrl(data.url);
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

    const setSpeed = (speed: number) => {
        if (audioRef.current) audioRef.current.playbackRate = speed;
    };

    const nextSong = () => {
    const currentIndex = songs.findIndex(s => s.id === currentSongId);
    const nextIndex = (currentIndex + 1) % songs.length;
    setSong(songs[nextIndex].id);
    setIsPlaying(true); // auto-play next song
    };

    const prevSong = () => {
    const currentIndex = songs.findIndex(s => s.id === currentSongId);
    const prevIndex = currentIndex === 0 ? songs.length - 1 : currentIndex - 1;
    setSong(songs[prevIndex].id);
    setIsPlaying(true);
    };

    return (
        <div className="pr-3 bg-midnight text-white">
            <CoverArt cover={`/api/v1/songs/${currentSong.id}`}/>
            <SongTitle title={currentSong.title} artist={currentSong.artist}/>
            <PlayControls isPlaying={isPlaying} onPlayPause={togglePlay} onNext={nextSong} onPrev={prevSong} audioRef={audioRef}/>
            <VolumeControls/>
            <audio
            ref={audioRef}
            src={audioUrl || undefined}/>
        </div>
    );
}