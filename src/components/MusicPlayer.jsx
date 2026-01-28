import CurrentlyPlaying from "./CurrentlyPlaying";
import PlayList from "./PlayList.jsx";

export default function MusicPlayer() {
  return (
    <div className="flex justify-content-center">
      <CurrentlyPlaying/>
      <PlayList/>
    </div>
  )
}
