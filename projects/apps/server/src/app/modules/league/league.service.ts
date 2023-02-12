import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { League, LeagueDocument } from '../../schemas/league.schema';
import { CrudService } from '../../core/services/crud.service';

@Injectable()
export class LeagueService extends CrudService<LeagueDocument> {
  constructor(
    @InjectModel(League.name)
    private readonly leagueModel: Model<LeagueDocument>
  ) {
    super(leagueModel);
  }
}
