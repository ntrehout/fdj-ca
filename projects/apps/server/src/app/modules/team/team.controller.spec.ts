import { Test, TestingModule } from "@nestjs/testing";
import { TeamController } from "./team.controller";
import { TeamService } from "./team.service";
import { getModelToken } from "@nestjs/mongoose";
import { Team } from "../../schemas/team.schema";
import { Model } from "mongoose";

describe('TeamController', () => {
  let controller: TeamController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [TeamController],
      providers: [
        TeamService,
        {
          provide: getModelToken(Team.name),
          useValue: Model,
        },
      ],
    }).compile();

    controller = module.get<TeamController>(TeamController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
