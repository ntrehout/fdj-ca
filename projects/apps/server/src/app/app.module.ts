import { Module } from '@nestjs/common';
import { HelloWorldModule } from './modules/hello-world/hello-world.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import mongodb from '../config/mongodb.config';
import { LeagueModule } from './modules/league/league.module';

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
  ],
})
export class AppModule {}
