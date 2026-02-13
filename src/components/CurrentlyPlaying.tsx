import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import PlayControls from "./PlayControls";
import VolumeControls from "./VolumeControls";
import { useState } from "react";
import type { Song } from "./App";

type PlayingProps = {
    songs: Song[];
}

export default function CurrentlyPlaying({songs}: PlayingProps){
    const [currentSongId, setSong] = useState<string | null>(
        songs.length > 0 ? songs[0].id :null
    );
    const currentSong = songs.find((song) => song.id === currentSongId) || songs[0];
    return (
        <div className="pr-3 bg-midnight text-white">
            <CoverArt cover={`/api/v1/songs/${currentSong.id}`}/>
            <SongTitle title={currentSong.title} artist={currentSong.artist}/>
            <PlayControls setSong={setSong()}/>
            <VolumeControls/>
        </div>
    );
}