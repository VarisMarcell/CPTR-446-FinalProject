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
exports.UpdatePlaylistDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_playlist_dto_1 = require("./create-playlist.dto");
const swagger_1 = require("@nestjs/swagger");
class UpdatePlaylistDto extends (0, mapped_types_1.PartialType)(create_playlist_dto_1.CreatePlaylistDto) {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: "This is a required value."
    }),
    __metadata("design:type", String)
], UpdatePlaylistDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: "This is a required value."
    }),
    __metadata("design:type", Number)
], UpdatePlaylistDto.prototype, "numSongs", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: "This is a required value."
    }),
    __metadata("design:type", String)
], UpdatePlaylistDto.prototype, "totalDuration", void 0);
exports.UpdatePlaylistDto = UpdatePlaylistDto;
//# sourceMappingURL=update-playlist.dto.js.map