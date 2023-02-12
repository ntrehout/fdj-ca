import { Test, TestingModule } from "@nestjs/testing";
import { LeagueController } from "./league.controller";
import { getModelToken } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { LeagueService } from "./league.service";
import { League } from "../../schemas/league.schema";

describe('LeagueController', () => {
  let controller: LeagueController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LeagueController],
      providers: [
        LeagueService,
        {
          provide: getModelToken(League.name),
          useValue: Model,
        },
      ],
    }).compile();

    controller = module.get<LeagueController>(LeagueController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
