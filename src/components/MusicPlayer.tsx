import CurrentlyPlaying from "./CurrentlyPlaying.js";
import PlayList from "./Playlist.js";

export default function MusicPlayer() {
  return (
    <div className="flex flex-col sm:flex-row justify-evenly">
      <CurrentlyPlaying/>
      <br />
      <PlayList/>
    </div>
  )
}
