import { Controller, Get, Param, Query } from "@nestjs/common";
import { LeagueService } from "./league.service";
import { GetAllQueryParams, ILeague } from "@fdj-ca/shared-models";

@Controller('leagues')
export class LeagueController {
  constructor(private readonly leagueService: LeagueService) {}

  @Get()
  getAll(@Query() queryParams: GetAllQueryParams<ILeague>) {
    return this.leagueService.getAll(queryParams);
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.leagueService.getOneByID(id);
  }
}
