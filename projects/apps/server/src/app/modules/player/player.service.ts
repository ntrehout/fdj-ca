import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Player, PlayerDocument } from '../../schemas/player.schema';
import { InjectModel } from '@nestjs/mongoose';
import { CrudService } from '../../core/services/crud.service';
import { from, switchMap } from 'rxjs';
import { TeamService } from '../team/team.service';

@Injectable()
export class PlayerService extends CrudService<PlayerDocument> {
  constructor(
    @InjectModel(Player.name)
    private readonly playerModel: Model<PlayerDocument>,
    private readonly teamService: TeamService
  ) {
    super(playerModel);
  }

  getManyByTeamID(teamID: string) {
    return from(this.teamService.getOneByID(teamID)).pipe(
      switchMap((team) => this.model.findById(team._id))
    );
  }
}
