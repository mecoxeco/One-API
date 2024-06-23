import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type EpisodeDocument = HydratedDocument<Episode>;

@Schema()
export class Episode {
    @Prop()
    id: number;

    @Prop()
    titulo: string;

    @Prop()
    lancamento: Date;

    @Prop()
    lancamentoRemaster: Date;

    @Prop()
    personagens: string;

    @Prop()
    temporada: number;

    @Prop()
    episodio: number;

    @Prop()
    locais: string;

    @Prop()
    abertura: string;
}

export const EpisodeSchema = SchemaFactory.createForClass(Episode);
