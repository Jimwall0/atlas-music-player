export default function PlayListItem({items}){
    return (
        <div>
            <div>
                <h1>{items.title}</h1>
                <h2>{items.artist}</h2>
            </div>
            <p>{items.duration}</p>
        </div>
    )
}