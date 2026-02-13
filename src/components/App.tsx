import { useEffect, useState } from "react";
import Footer from "./Footer";
import MusicPlayer from "./MusicPlayer";
import LoadingSkeleton from "./LoadingSkeleton";

export type Song = {
  id: string;
  title: string;
  artist: string;
  genre: string;
  duration: number;
}

function App() {
  const [songs, setSongs] = useState<Song[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlaylist = async () => {
      try {
        const response = await fetch("/api/v1/playlist.json");
        if (!response.ok) throw new Error("Failed to fetch playlist");
        const data: Song[] = await response.json();
        setSongs(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchPlaylist();
  }, []);
  if (loading) return <LoadingSkeleton/>;
  return (
    <div className="h-full flex flex-col justify-between p-8 min-h-screen bg-tahiti">
      <MusicPlayer songs={songs}/>
      <Footer />
    </div>
  );
}

export default App;
