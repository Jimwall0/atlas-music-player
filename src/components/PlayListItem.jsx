export default function PlayListItem({title, artist, duration}){
    return (
        <div className="flex justify-between w-full">
            <div>
                <h1 className="font-bold">{title}</h1>
                <h2>{artist}</h2>
            </div>
            <p>{duration}</p>
        </div>
    )
}