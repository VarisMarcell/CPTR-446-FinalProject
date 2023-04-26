import { Collection } from "@mikro-orm/core";
import { CreateUserDto } from "../dto/create-user.dto";
import { Playlist } from "../../playlists/entities/playlist.entity";
export declare class User {
    constructor(createUserDto: CreateUserDto);
    readonly id: number;
    readonly apiKey: string;
    userName: string;
    firstName: string;
    lastName: string;
    playlists: Collection<Playlist, object>;
}
