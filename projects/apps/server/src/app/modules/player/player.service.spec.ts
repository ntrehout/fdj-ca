import { Test, TestingModule } from '@nestjs/testing';
import { PlayerService } from './player.service';
import { getModelToken } from '@nestjs/mongoose';
import { Player } from '../../schemas/player.schema';
import { Model } from 'mongoose';
import { TeamService } from '../team/team.service';
import { Team } from '../../schemas/team.schema';

describe('PlayerService', () => {
  let service: PlayerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PlayerService,
        TeamService,
        {
          provide: getModelToken(Team.name),
          useValue: Model,
        },
        {
          provide: getModelToken(Player.name),
          useValue: Model,
        },
      ],
    }).compile();

    service = module.get<PlayerService>(PlayerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
