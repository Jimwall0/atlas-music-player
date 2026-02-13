export default function AudioPlayer({audioRef, audioUrl}: {audioRef: React.RefObject<HTMLAudioElement | null>; audioUrl: string | null;}) {
    return <audio ref={audioRef} src={audioUrl || undefined}/>
}