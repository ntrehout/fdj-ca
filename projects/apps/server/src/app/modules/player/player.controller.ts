import { Controller, Get, Param, Query } from '@nestjs/common';
import { GetAllQueryParams } from '../../types/query-params.types';
import { PlayerService } from './player.service';

@Controller('players')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @Get()
  getAll(
    @Query() queryParams: GetAllQueryParams & { name?: string; teamID?: string }
  ) {
    if (queryParams.name) {
      return this.playerService.getManyByName(queryParams.name);
    } else if (queryParams.teamID) {
      return this.playerService.getManyByTeamID(queryParams.teamID);
    } else {
      return this.playerService.getAll(queryParams);
    }
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.playerService.getOneByID(id);
  }
}
