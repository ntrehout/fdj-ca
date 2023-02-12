import { Test, TestingModule } from '@nestjs/testing';
import { TeamService } from './team.service';
import { getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Team } from '../../schemas/team.schema';

describe('TeamService', () => {
  let service: TeamService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TeamService,
        {
          provide: getModelToken(Team.name),
          useValue: Model,
        },
      ],
    }).compile();

    service = module.get<TeamService>(TeamService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
