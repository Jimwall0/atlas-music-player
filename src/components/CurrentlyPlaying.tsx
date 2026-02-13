import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import PlayControls from "./PlayControls";
import VolumeControls from "./VolumeControls";
import type { Song } from "./App";

type PlayingProps = {
    songs: Song[];
}

export default function CurrentlyPlaying({songs}: PlayingProps){
    return (
        <div className="pr-3 bg-midnight text-white">
            <CoverArt cover={songs.cover}/>
            <SongTitle/>
            <PlayControls/>
            <VolumeControls/>
        </div>
    );
}