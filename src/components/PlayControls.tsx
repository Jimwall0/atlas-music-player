import { Rewind, Play, Pause, FastForward, Shuffle } from 'lucide-react';
import {useState} from "react";

export default function PlayControls({
    isPlaying,
    onPlayPause,
    onNext,
    onPrev,
    audioRef,
    disabledPrev,
    disabledNext,
    shuffle,
    shuffleOn
}: {
    isPlaying: boolean;
    onPlayPause: () => void;
    onNext: () => void;
    onPrev: () => void;
    audioRef: React.RefObject<HTMLAudioElement | null>;
    disabledPrev: boolean;
    disabledNext: boolean;
    shuffle: () => void;
    shuffleOn: boolean;
}){
    const [speed, setSpeed] = useState<number>(1);
    const toggleSpeed = () => {
        const nextSpeed = speed === 0.5 ? 1: speed === 1 ? 2 : 0.5;
        setSpeed(nextSpeed);
        if (audioRef!.current) {
            audioRef.current.playbackRate = nextSpeed;
        }
    }
    return (
        <div>
            <ul className="flex justify-between items-center w-full px-8 py-4">
                <li><button onClick={toggleSpeed}><p className="font-bold text-xl">{speed}x</p></button></li>
                <li><button className="focus:outline-none disabled:cursor-not-allowed" onClick={onPrev} disabled={disabledPrev}><Rewind/></button></li>
                <li><button className="border-2 border-burntorange rounded-lg p-2 focus:outline-none" onClick={onPlayPause}>{isPlaying ? <Pause/> : <Play/>}</button></li>
                <li><button className="focus:outline-none disabled:cursor-not-allowed" onClick={onNext} disabled={disabledNext}><FastForward/></button></li>
                <li><button className={`focus:outline-none ${shuffleOn ? "bg-amber-500 text-white" : "bg-gray-700 text-gray-300"}`} onClick={shuffle}><Shuffle/></button></li>
            </ul>
        </div>
    );
}