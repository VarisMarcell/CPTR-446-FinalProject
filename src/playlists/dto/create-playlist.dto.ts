import { ApiProperty } from "@nestjs/swagger"


export class CreatePlaylistDto {
    @ApiProperty({
        type: String,
        description: "This is a required value."
    })
    name: string
    @ApiProperty({
        type: String,
        description: "This is a required value."
    })
    numSongs: number
    @ApiProperty({
        type: String,
        description: "This is a required value."
    })
    totalDuration: string
    // user_id: number
}
