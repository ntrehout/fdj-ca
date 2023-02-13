import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { ITeam } from "@fdj-ca/shared-models";

export type TeamDocument = Team & Document;

@Schema()
export class Team implements ITeam {
  _id: string;
  @Prop({ required: true })
  name: string;
  @Prop({ required: false })
  banner: string;
  @Prop({ required: false })
  descriptionEN: string;
  @Prop({ required: false })
  descriptionFR: string;
  @Prop({ required: false })
  facebook: string;
  @Prop({ required: false })
  instagram: string;
  @Prop({ required: false, type: Object })
  stadium: {
    name: string;
    location: string;
    capacity: number;
    thumbnail: string;
  };
  @Prop({ required: false })
  thumbnail: string;
  @Prop({ required: false })
  twitter: string;
  @Prop({ required: false })
  website: string;
  @Prop({ required: false })
  youtube: string;
  @Prop({ required: true })
  players: string[];
}

export const TeamSchema = SchemaFactory.createForClass(Team);
