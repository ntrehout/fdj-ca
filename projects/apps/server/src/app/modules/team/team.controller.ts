import { Controller, Get, Param, Query } from "@nestjs/common";
import { TeamService } from "./team.service";
import { GetAllQueryParams, ITeam } from "@fdj-ca/shared-models";

@Controller('teams')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @Get()
  getAll(@Query() queryParams: GetAllQueryParams<ITeam>) {
    return this.teamService.getAll(queryParams);
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.teamService.getOneByID(id);
  }
}
