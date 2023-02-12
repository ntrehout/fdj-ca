import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { IPlayer } from "@fdj-ca/shared-models";

export type PlayerDocument = Player & Document;

@Schema()
export class Player implements IPlayer {
  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  born: Date;
  @Prop({ required: true })
  position: 'Forward' | 'Midfielder' | 'Defender' | 'Goalkeeper';
  @Prop({ required: false, type: Object })
  signin: { amount: number; currency: string };
  @Prop({ required: true })
  thumbnail: string;
}

export const PlayerSchema = SchemaFactory.createForClass(Player);
