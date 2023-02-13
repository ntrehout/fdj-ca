import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { ILeague as ILeague } from "@fdj-ca/shared-models";

export type LeagueDocument = League & Document;

@Schema()
export class League implements ILeague {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  sport: string;
  teams: string[];
}

export const LeagueSchema = SchemaFactory.createForClass(League);
