import { CreatePlaylistDto } from './dto/create-playlist.dto';
import { UpdatePlaylistDto } from './dto/update-playlist.dto';
import { EntityManager } from '@mikro-orm/mysql';
import { Loaded } from '@mikro-orm/core';
import { Playlist } from './entities/playlist.entity';
import { User } from 'src/users/entities/user.entity';
export declare class PlaylistsService {
    private readonly em;
    constructor(em: EntityManager);
    create(createPlaylistDto: CreatePlaylistDto, user: User): Promise<Playlist>;
    findAll(): Promise<Loaded<Playlist[]>>;
    findOne(id: number): Promise<Loaded<Playlist>>;
    update(id: number, updatePlaylistDto: UpdatePlaylistDto): Promise<Loaded<Playlist>>;
    remove(id: number): Promise<void>;
}
