import { useState, useEffect } from 'react';

export default function PlayList(){
    const url="public/api/v1/playlist";
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
                {list.map((item) => {
                    <li key={item.id}>
                        <PlayListItem items={item}/>
                    </li>
                })}
            </ul>
        </div>
    )
}