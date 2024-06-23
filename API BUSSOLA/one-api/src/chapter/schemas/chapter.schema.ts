import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ChapterDocument = HydratedDocument<Chapter>;

@Schema()
export class Chapter {
    @Prop()
    id: number;

    @Prop()
    titulo: string;

    @Prop()
    volume: number;

    @Prop()
    capitulo: number;

    @Prop()
    pgs: number;

    @Prop()
    lancamento: Date;
}

export const ChapterSchema = SchemaFactory.createForClass(Chapter);
