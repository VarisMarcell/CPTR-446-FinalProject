import { Entity, PrimaryKey, Property, OneToMany, Collection } from "@mikro-orm/core";
import { CreateUserDto } from "../dto/create-user.dto";
import * as crypto from 'crypto'
import { Playlist } from "../../playlists/entities/playlist.entity";

@Entity()
export class User {
    constructor(createUserDto: CreateUserDto) {
        this.userName = createUserDto.userName
        this.firstName = createUserDto.firstName
        this.lastName = createUserDto.lastName
    }

    @PrimaryKey({
        autoincrement: true,
    })
    readonly id!: number

    @Property({
        length: 64,
        lazy: true,
        index: true
    })
    readonly apiKey: string = crypto.randomBytes(32).toString("hex")

    @Property({
        length: 64
    })
    userName!: string

    @Property({
        length: 64
    })
    firstName!: string

    @Property({
        length: 64
    })
    lastName!: string

    @OneToMany(() => Playlist, playlist => playlist.user)
    playlists = new Collection<Playlist>(this);

    // @Property()
    // role_id: number
}

