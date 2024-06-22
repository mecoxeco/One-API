import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ChapterDocument = HydratedDocument<Chapter>;

@Schema()
export class Chapter {
    @Prop()
    id: int;

    @Prop()
    titulo: string;

    @Prop()
    volume: int;

    @Prop()
    capitulo: int;

    @Prop()
    pgs: int;

    @Prop()
    lancamento: Date;
}

export const ChapterSchema = SchemaFactory.createForClass(Chapter);