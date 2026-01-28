export default function PlayListItem({title, artist, duration}){
    return (
        <div>
            <div>
                <h1>{title}</h1>
                <h2>{artist}</h2>
            </div>
            <p>{duration}</p>
        </div>
    )
}