import { Test, TestingModule } from '@nestjs/testing';
import { LeagueService } from './league.service';
import { getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { League } from '../../schemas/league.schema';

describe('LeagueService', () => {
  let service: LeagueService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LeagueService,
        {
          provide: getModelToken(League.name),
          useValue: Model,
        },
      ],
    }).compile();

    service = module.get<LeagueService>(LeagueService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
