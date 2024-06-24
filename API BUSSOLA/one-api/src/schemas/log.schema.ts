import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LogDocument = Log & Document;

@Schema()
export class Log {
  @Prop({ required: true })
  route: string;

  @Prop({ required: true })
  method: string;

  @Prop({ required: true })
  responseTime: number;
}

export const LogSchema = SchemaFactory.createForClass(Log);
