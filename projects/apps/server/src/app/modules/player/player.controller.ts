import { Controller, Get, Param, Query } from "@nestjs/common";
import { PlayerService } from "./player.service";
import { GetAllQueryParams, IPlayer } from "@fdj-ca/shared-models";

@Controller('players')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @Get()
  getAll(
    @Query() queryParams: GetAllQueryParams<IPlayer> & { teamID: string }
  ) {
    return this.playerService.getAll(queryParams);
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.playerService.getOneByID(id);
  }
}
