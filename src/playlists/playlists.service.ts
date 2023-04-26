import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePlaylistDto } from './dto/create-playlist.dto';
import { UpdatePlaylistDto } from './dto/update-playlist.dto';
import { EntityManager } from '@mikro-orm/mysql';
import { Loaded } from '@mikro-orm/core';
import { Playlist } from './entities/playlist.entity';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class PlaylistsService {
  constructor(private readonly em: EntityManager) {}
  
  async create(createPlaylistDto: CreatePlaylistDto, user: User): Promise<Playlist> {
    const playlist = new Playlist(createPlaylistDto, user)

    await this.em.persistAndFlush(playlist)
    return playlist
  }


  findAll(): Promise<Loaded<Playlist[]>> {
    return this.em.find(Playlist, {})
  }


  findOne(id: number): Promise<Loaded<Playlist>> {
    return this.em.findOneOrFail(Playlist, {id: id})
  }


  async update(id: number, updatePlaylistDto: UpdatePlaylistDto): Promise<Loaded<Playlist>> {
    const playlist = await this.em.findOne(Playlist, {id: id})

    if (!playlist) {
      throw new NotFoundException(`User with id ${id} not found.`)
    }

    if (updatePlaylistDto.name) {
      playlist.name = updatePlaylistDto.name
    }
    if (updatePlaylistDto.numSongs) {
      playlist.numSongs = updatePlaylistDto.numSongs
    }
    if (updatePlaylistDto.totalDuration) {
      playlist.totalDuration = updatePlaylistDto.totalDuration
    }
 
    await this.em.persistAndFlush(playlist)
    return playlist
  }


  async remove(id: number): Promise<void> {
    this.em.removeAndFlush(this.em.getReference(Playlist, id))
  }
}
