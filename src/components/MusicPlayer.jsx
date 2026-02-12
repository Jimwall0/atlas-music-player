import CurrentlyPlaying from "./CurrentlyPlaying";
import PlayList from "./PlayList.jsx";

export default function MusicPlayer() {
  return (
    <div className="flex flex-col sm:flex-row">
      <CurrentlyPlaying/>
      <br />
      <PlayList/>
    </div>
  )
}
