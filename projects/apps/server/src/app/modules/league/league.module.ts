import { Module } from '@nestjs/common';
import { LeagueController } from './league.controller';
import { LeagueService } from './league.service';
import { MongooseModule } from '@nestjs/mongoose';
import { LeagueSchema } from '../../schemas/league.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'League', schema: LeagueSchema }]),
  ],
  controllers: [LeagueController],
  providers: [LeagueService],
})
export class LeagueModule {}
