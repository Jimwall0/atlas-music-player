import Footer from "./Footer";
import MusicPlayer from "./MusicPlayer";
import { useState } from "react";

function App() {
  return (
    <div className="h-ful flex flex-col justify-between p-8 min-h-screen bg-tahiti">
      <MusicPlayer />
      <Footer />
    </div>
  );
}

export default App;
