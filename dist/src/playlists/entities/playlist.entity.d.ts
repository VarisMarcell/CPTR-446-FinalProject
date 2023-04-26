import { Collection } from "@mikro-orm/core";
import { CreatePlaylistDto } from "../dto/create-playlist.dto";
import { User } from "../../users/entities/user.entity";
import { Song } from "../../songs/entities/song.entity";
export declare class Playlist {
    constructor(createPlaylistDto: CreatePlaylistDto, user: User);
    readonly id: number;
    name: string;
    numSongs: number;
    totalDuration: string;
    user: User;
    songs: Collection<Song, object>;
}
