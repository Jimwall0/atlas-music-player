import { useState } from "react"

export default function VolumeControls(){
    const [value, setValue] = useState(60)
    return (
        <div>
            <input type="range" min="0" max="100" value={value} onChange={e => setValue(e.target.value)} className="volume-slider"/>
        </div>
    );
}