import { useState, useEffect } from 'react';
import PlayListItem from "./PlayListItem";

function formatDuration(seconds) {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
}

export default function PlayList(){
    const url="/api/v1/playlist";
    const [list, setInfo] = useState([]);
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setInfo(data));
    }, []);
    return (
        <div className="h-full w-full">
            <h1 className="font-bold text-lg pt-1 pb-3">Playlist</h1>
            <ul className="flex flex-col">
                {list.map((item) => (
                    <li key={item.id}>
                        <PlayListItem title={item.title} artist={item.artist} duration={formatDuration(item.duration)}/>
                    </li>
                ))}
            </ul>
        </div>
    )
}