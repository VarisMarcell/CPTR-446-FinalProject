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
exports.Playlist = void 0;
const core_1 = require("@mikro-orm/core");
const create_playlist_dto_1 = require("../dto/create-playlist.dto");
const user_entity_1 = require("../../users/entities/user.entity");
const song_entity_1 = require("../../songs/entities/song.entity");
let Playlist = class Playlist {
    constructor(createPlaylistDto, user) {
        this.songs = new core_1.Collection(this);
        this.name = createPlaylistDto.name;
        this.numSongs = createPlaylistDto.numSongs;
        this.totalDuration = createPlaylistDto.totalDuration;
        this.user = user;
    }
};
__decorate([
    (0, core_1.PrimaryKey)({
        autoincrement: true,
    }),
    __metadata("design:type", Number)
], Playlist.prototype, "id", void 0);
__decorate([
    (0, core_1.Property)(({
        length: 64
    })),
    __metadata("design:type", String)
], Playlist.prototype, "name", void 0);
__decorate([
    (0, core_1.Property)(),
    __metadata("design:type", Number)
], Playlist.prototype, "numSongs", void 0);
__decorate([
    (0, core_1.Property)(),
    __metadata("design:type", String)
], Playlist.prototype, "totalDuration", void 0);
__decorate([
    (0, core_1.ManyToOne)({
        entity: () => user_entity_1.User,
        inversedBy: user => user.playlists
    }),
    __metadata("design:type", user_entity_1.User)
], Playlist.prototype, "user", void 0);
__decorate([
    (0, core_1.ManyToMany)(() => song_entity_1.Song),
    __metadata("design:type", Object)
], Playlist.prototype, "songs", void 0);
Playlist = __decorate([
    (0, core_1.Entity)(),
    __metadata("design:paramtypes", [create_playlist_dto_1.CreatePlaylistDto, user_entity_1.User])
], Playlist);
exports.Playlist = Playlist;
//# sourceMappingURL=playlist.entity.js.map