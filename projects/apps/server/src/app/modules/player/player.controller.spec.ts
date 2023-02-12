import { Test, TestingModule } from "@nestjs/testing";
import { PlayerController } from "./player.controller";
import { getModelToken } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { PlayerService } from "./player.service";
import { Player } from "../../schemas/player.schema";
import { TeamService } from "../team/team.service";
import { Team } from "../../schemas/team.schema";

describe('PlayerController', () => {
  let controller: PlayerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlayerController],
      providers: [
        PlayerService,
        TeamService,
        {
          provide: getModelToken(Player.name),
          useValue: Model,
        },
        {
          provide: getModelToken(Team.name),
          useValue: Model,
        },
      ],
    }).compile();

    controller = module.get<PlayerController>(PlayerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
