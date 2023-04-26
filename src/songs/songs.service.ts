import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSongDto } from './dto/create-song.dto';
import { UpdateSongDto } from './dto/update-song.dto';
import { EntityManager } from '@mikro-orm/mysql';
import { Song } from './entities/song.entity';
import { Loaded } from '@mikro-orm/core';

@Injectable()
export class SongsService {
  constructor(private readonly em: EntityManager) {}

  async create(createSongDto: CreateSongDto): Promise<Song> {
    const song = new Song(createSongDto)

    await this.em.persistAndFlush(song)
    return song
  }


  findAll(): Promise<Loaded<Song[]>> {
    return this.em.find(Song, {})
  }


  findOne(id: number): Promise<Loaded<Song>> {
    return this.em.findOneOrFail(Song, {id: id})
  }


  async update(id: number, updateSongDto: UpdateSongDto): Promise<Loaded<Song>> {
    const song = await this.em.findOne(Song, {id: id})

    if (!song) {
      throw new NotFoundException(`Song with id ${id} not found.`)
    }

    if (updateSongDto.name) {
      song.name = updateSongDto.name
    }
    if (updateSongDto.artist) {
      song.artist = updateSongDto.artist
    }
    if (updateSongDto.duration) {
      song.duration = updateSongDto.duration
    }
    if (updateSongDto.key) {
      song.key = updateSongDto.key
    }
    if (updateSongDto.BPM) {
      song.BPM = updateSongDto.BPM
    }
    if (updateSongDto.year) {
      song.year = updateSongDto.year
    }
    if (updateSongDto.genre) {
      song.genre = updateSongDto.genre
    }
    if (updateSongDto.link) {
      song.link = updateSongDto.link
    }
 
    await this.em.persistAndFlush(song)
    return song
  }


  async remove(id: number): Promise<void> {
    this.em.removeAndFlush(this.em.getReference(Song, id))
  }
}
