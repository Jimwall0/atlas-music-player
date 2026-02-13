import { useState } from "react";
import { Volume2 } from "lucide-react";

export default function VolumeControls({audioRef}: {audioRef: React.RefObject<HTMLAudioElement | null>;}){
    const [sound, setSound] = useState(50)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(e.target.value);
        setSound(value)
        if (audioRef.current) {
            audioRef.current.volume = value;
        }
    }
    return (
        <div className="flex justify-items-stretch">
            <Volume2/>
            <input className="w-full" type="range" min="0" max="100" value={sound} onChange={handleChange}/>
        </div>
    );
}