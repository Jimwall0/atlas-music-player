import { Rewind, Play, FastForward, Shuffle } from 'lucide-react';

export default function PlayControls(){
    return (
        <div>
            <ul className="flex justify-between items-center w-full px-8 py-4">
                <li><button><p className="font-bold text-xl">1x</p></button></li>
                <li><button className="focus:outline-none"><Rewind/></button></li>
                <li><button className="border-2 border-burntorange rounded-lg p-2 focus:outline-none"><Play/></button></li>
                <li><button className="focus:outline-none"><FastForward/></button></li>
                <li><button className="focus:outline-none"><Shuffle/></button></li>
            </ul>
        </div>
    );
}