import CoverArt from "./CoverArt";

export default function CurrentlyPlaying(){
    return (
        <div>
            <CoverArt/>
            <SongTitle/>
            <PlayControls/>
            <VoluemControls/>
        </div>
    );
}