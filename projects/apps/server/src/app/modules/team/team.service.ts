import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Team, TeamDocument } from '../../schemas/team.schema';
import { CrudService } from '../../core/services/crud.service';

@Injectable()
export class TeamService extends CrudService<TeamDocument> {
  constructor(
    @InjectModel(Team.name) private readonly teamModel: Model<TeamDocument>
  ) {
    super(teamModel);
  }
}
