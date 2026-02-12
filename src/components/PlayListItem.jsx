export default function PlayListItem({title, artist, duration}){
    return (
        <div className="flex justify-between max-w-full">
            <div>
                <h1 className="font-bold text-indigo">{title}</h1>
                <h2 className="text-gray-500 font-semibold3">{artist}</h2>
            </div>
            <p>{duration}</p>
        </div>
    )
}