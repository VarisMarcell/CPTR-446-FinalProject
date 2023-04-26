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
exports.Song = void 0;
const core_1 = require("@mikro-orm/core");
const create_song_dto_1 = require("../dto/create-song.dto");
const playlist_entity_1 = require("../../playlists/entities/playlist.entity");
let Song = class Song {
    constructor(createSongDto) {
        this.playlists = new core_1.Collection(this);
        this.name = createSongDto.name;
        this.artist = createSongDto.artist;
        this.duration = createSongDto.duration;
        this.key = createSongDto.key;
        this.BPM = createSongDto.BPM;
        this.year = createSongDto.year;
        this.genre = createSongDto.genre;
        this.link = createSongDto.link;
    }
};
__decorate([
    (0, core_1.PrimaryKey)({
        autoincrement: true,
    }),
    __metadata("design:type", Number)
], Song.prototype, "id", void 0);
__decorate([
    (0, core_1.Property)({
        length: 64
    }),
    __metadata("design:type", String)
], Song.prototype, "name", void 0);
__decorate([
    (0, core_1.Property)({
        length: 32
    }),
    __metadata("design:type", String)
], Song.prototype, "artist", void 0);
__decorate([
    (0, core_1.Property)({
        length: 16
    }),
    __metadata("design:type", String)
], Song.prototype, "duration", void 0);
__decorate([
    (0, core_1.Property)({
        length: 4
    }),
    __metadata("design:type", String)
], Song.prototype, "key", void 0);
__decorate([
    (0, core_1.Property)({
        length: 4
    }),
    __metadata("design:type", Number)
], Song.prototype, "BPM", void 0);
__decorate([
    (0, core_1.Property)({
        length: 4
    }),
    __metadata("design:type", Number)
], Song.prototype, "year", void 0);
__decorate([
    (0, core_1.Property)({
        length: 32
    }),
    __metadata("design:type", String)
], Song.prototype, "genre", void 0);
__decorate([
    (0, core_1.Property)({
        length: 128
    }),
    __metadata("design:type", String)
], Song.prototype, "link", void 0);
__decorate([
    (0, core_1.ManyToMany)(() => playlist_entity_1.Playlist),
    __metadata("design:type", Object)
], Song.prototype, "playlists", void 0);
Song = __decorate([
    (0, core_1.Entity)(),
    __metadata("design:paramtypes", [create_song_dto_1.CreateSongDto])
], Song);
exports.Song = Song;
//# sourceMappingURL=song.entity.js.map