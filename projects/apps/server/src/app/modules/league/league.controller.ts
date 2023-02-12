import { Controller, Get, Param, Query } from '@nestjs/common';
import { LeagueService } from './league.service';
import { GetAllQueryParams } from '../../types/query-params.types';

@Controller('leagues')
export class LeagueController {
  constructor(private readonly leagueService: LeagueService) {}

  @Get()
  getAll(@Query() queryParams: GetAllQueryParams & { name: string }) {
    if (queryParams.name) {
      return this.leagueService.getManyByName(queryParams.name);
    } else {
      return this.leagueService.getAll(queryParams);
    }
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.leagueService.getOneByID(id);
  }
}
