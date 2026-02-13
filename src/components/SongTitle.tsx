export default function SongTitle({artist, title}: {artist: string, title: string}){
    return (
        <div>
            <h1 className="font-bold text-2xl">{title}</h1>
            <h2 className="text-gray-500 text-lg">{artist}</h2>
        </div>
    );
}