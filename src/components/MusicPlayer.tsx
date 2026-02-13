import CurrentlyPlaying from "./CurrentlyPlaying.js";
import PlayList from "./Playlist.js";
import { Song } from "./App.js";

type MusicPlayerProps = {
  songs: Song[];
}

export default function MusicPlayer({ songs }: MusicPlayerProps) {
  return (
    <div className="flex flex-col sm:flex-row justify-evenly">
      <CurrentlyPlaying songs={songs}/>
      <PlayList/>
    </div>
  )
}
