import { CreateSongDto } from './dto/create-song.dto';
import { UpdateSongDto } from './dto/update-song.dto';
import { EntityManager } from '@mikro-orm/mysql';
import { Song } from './entities/song.entity';
import { Loaded } from '@mikro-orm/core';
export declare class SongsService {
    private readonly em;
    constructor(em: EntityManager);
    create(createSongDto: CreateSongDto): Promise<Song>;
    findAll(): Promise<Loaded<Song[]>>;
    findOne(id: number): Promise<Loaded<Song>>;
    update(id: number, updateSongDto: UpdateSongDto): Promise<Loaded<Song>>;
    remove(id: number): Promise<void>;
}
