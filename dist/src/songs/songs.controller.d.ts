import { SongsService } from './songs.service';
import { CreateSongDto } from './dto/create-song.dto';
import { UpdateSongDto } from './dto/update-song.dto';
export declare class SongsController {
    private readonly songsService;
    constructor(songsService: SongsService);
    create(createSongDto: CreateSongDto): Promise<import("./entities/song.entity").Song>;
    findAll(): Promise<import("./entities/song.entity").Song[]>;
    findOne(id: string): Promise<import("@mikro-orm/core").Loaded<import("./entities/song.entity").Song, never>>;
    update(id: string, updateSongDto: UpdateSongDto): Promise<import("@mikro-orm/core").Loaded<import("./entities/song.entity").Song, never>>;
    remove(id: string): Promise<void>;
}
