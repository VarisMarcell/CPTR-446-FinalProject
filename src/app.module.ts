import { MiddlewareConsumer, Module, NestMiddleware, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MikroORM } from '@mikro-orm/mysql';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { UsersModule } from './users/users.module';
import { SongsModule } from './songs/songs.module';
import { PlaylistsModule } from './playlists/playlists.module';
import { ApiAuth } from './middleware/ApiAuth.middleware';
import { MiddlewareContext } from './middleware/Context.middleware';

@Module({
  imports: [
    MikroOrmModule.forRoot(),
    UsersModule,
    SongsModule,
    PlaylistsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
      consumer
        .apply(MiddlewareContext, ApiAuth)
        .forRoutes('*')
  }
}
