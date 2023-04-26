"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SongsService = void 0;
const common_1 = require("@nestjs/common");
const mysql_1 = require("@mikro-orm/mysql");
const song_entity_1 = require("./entities/song.entity");
let SongsService = class SongsService {
    constructor(em) {
        this.em = em;
    }
    async create(createSongDto) {
        const song = new song_entity_1.Song(createSongDto);
        await this.em.persistAndFlush(song);
        return song;
    }
    findAll() {
        return this.em.find(song_entity_1.Song, {});
    }
    findOne(id) {
        return this.em.findOneOrFail(song_entity_1.Song, { id: id });
    }
    async update(id, updateSongDto) {
        const song = await this.em.findOne(song_entity_1.Song, { id: id });
        if (!song) {
            throw new common_1.NotFoundException(`Song with id ${id} not found.`);
        }
        if (updateSongDto.name) {
            song.name = updateSongDto.name;
        }
        if (updateSongDto.artist) {
            song.artist = updateSongDto.artist;
        }
        if (updateSongDto.duration) {
            song.duration = updateSongDto.duration;
        }
        if (updateSongDto.key) {
            song.key = updateSongDto.key;
        }
        if (updateSongDto.BPM) {
            song.BPM = updateSongDto.BPM;
        }
        if (updateSongDto.year) {
            song.year = updateSongDto.year;
        }
        if (updateSongDto.genre) {
            song.genre = updateSongDto.genre;
        }
        if (updateSongDto.link) {
            song.link = updateSongDto.link;
        }
        await this.em.persistAndFlush(song);
        return song;
    }
    async remove(id) {
        this.em.removeAndFlush(this.em.getReference(song_entity_1.Song, id));
    }
};
SongsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [mysql_1.EntityManager])
], SongsService);
exports.SongsService = SongsService;
//# sourceMappingURL=songs.service.js.map