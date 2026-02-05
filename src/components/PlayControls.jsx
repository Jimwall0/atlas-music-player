import { Rewind, Play, FastForward, Repeat } from 'lucide-react';

export default function PlayControls(){
    return (
        <div>
            <ul className="flex justify-evenly">
                <li><button>Speed</button></li>
                <li><Rewind/></li>
                <li><Play/></li>
                <li><FastForward/></li>
                <li><Repeat/></li>
            </ul>
        </div>
    );
}