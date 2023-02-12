import { Module } from '@nestjs/common';
import { HelloWorldModule } from './modules/hello-world/hello-world.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import mongodb from '../config/mongodb.config';
import { LeagueModule } from './modules/league/league.module';
import { TeamModule } from './modules/team/team.module';
import { PlayerModule } from './modules/player/player.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
      load: [mongodb],
    }),
    MongooseModule.forRootAsync({
      useFactory: (conf: ConfigService) => ({
        uri: conf.get('mongodb.uri'),
        retryAttempts: 3,
      }),
      inject: [ConfigService],
    }),
    HelloWorldModule,
    LeagueModule,
    TeamModule,
    PlayerModule,
  ],
})
export class AppModule {}
