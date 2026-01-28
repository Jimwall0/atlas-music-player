import { useState, useEffect } from 'react';
import PlayListItem from "./PlayListItem";

export default function PlayList(){
    const url="/api/v1/playlist";
    const [list, setInfo] = useState([]);
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setInfo(data));
    }, []);
    return (
        <div>
            <h1 className="font-bold">Playlist</h1>
            <ul>
                {list.map((item) => (
                    <li key={item.id}>
                        <PlayListItem title={item.title} artist={item.artist} duration={item.duration}/>
                    </li>
                ))}
            </ul>
        </div>
    )
}