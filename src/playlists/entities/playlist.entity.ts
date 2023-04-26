import { Entity, PrimaryKey, Property, ManyToOne, ManyToMany, Collection } from "@mikro-orm/core";
import { CreatePlaylistDto } from "../dto/create-playlist.dto";
import { User } from "../../users/entities/user.entity";
import { Song } from "../../songs/entities/song.entity";

@Entity()
export class Playlist {
    constructor(createPlaylistDto: CreatePlaylistDto, user: User) {
        this.name = createPlaylistDto.name
        this.numSongs = createPlaylistDto.numSongs
        this.totalDuration = createPlaylistDto.totalDuration
        this.user = user
    }

    @PrimaryKey({
        autoincrement: true,
    })
    readonly id!: number

    @Property(({
        length: 64
    }))
    name!: string

    @Property()
    numSongs!: number

    @Property()
    totalDuration!: string

    @ManyToOne({
        entity: () => User,
        inversedBy: user => user.playlists
    })
    user: User

    @ManyToMany(() => Song)
    songs = new Collection<Song>(this)
}
