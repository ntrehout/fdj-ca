import { Controller, Get, Param, Query } from '@nestjs/common';
import { GetAllQueryParams } from '../../types/query-params.types';
import { TeamService } from './team.service';

@Controller('teams')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @Get()
  getAll(@Query() queryParams: GetAllQueryParams & { name: string }) {
    if (queryParams.name) {
      return this.teamService.getManyByName(queryParams.name);
    } else {
      return this.teamService.getAll(queryParams);
    }
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.teamService.getOneByID(id);
  }
}
