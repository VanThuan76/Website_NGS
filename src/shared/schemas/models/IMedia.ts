export interface Media {
    id: React.Key,
    src: string,
    alt: string,
    ext: string // '.png, .mp4'
    width: number,
    height: number
}