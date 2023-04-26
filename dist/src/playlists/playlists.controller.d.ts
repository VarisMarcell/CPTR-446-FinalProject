import { PlaylistsService } from './playlists.service';
import { CreatePlaylistDto } from './dto/create-playlist.dto';
import { UpdatePlaylistDto } from './dto/update-playlist.dto';
import { Request } from 'express';
export declare class PlaylistsController {
    private readonly playlistsService;
    constructor(playlistsService: PlaylistsService);
    create(createPlaylistDto: CreatePlaylistDto, request: Request): Promise<import("./entities/playlist.entity").Playlist>;
    findAll(): Promise<import("./entities/playlist.entity").Playlist[]>;
    findOne(id: string): Promise<import("@mikro-orm/core").Loaded<import("./entities/playlist.entity").Playlist, never>>;
    update(id: string, updatePlaylistDto: UpdatePlaylistDto): Promise<import("@mikro-orm/core").Loaded<import("./entities/playlist.entity").Playlist, never>>;
    remove(id: string): Promise<void>;
}
