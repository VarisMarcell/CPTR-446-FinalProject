import { IsString, MaxLength } from "class-validator"

export class CreateSongDto {
    @IsString()
    @MaxLength(20)
    name: string

    artist: string
    duration: string
    key: string
    BPM: number
    year: number
    genre: string
    link: string
}
