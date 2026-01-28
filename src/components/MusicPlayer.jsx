import CurrentlyPlaying from "./CurrentlyPlaying";
import PlayList from "src/components/PlayList";

export default function MusicPlayer() {
  return (
    <div className="flex justify-content-center">
      <CurrentlyPlaying/>
      <PlayList/>
    </div>
  )
}
