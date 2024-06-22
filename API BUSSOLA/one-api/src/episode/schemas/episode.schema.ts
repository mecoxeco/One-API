import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {HydratedDocument} from 'mongoose';

export type EpisodeDocument = HydratedDocument<Episode>;

@Schema()
export class Episode {
    @Prop()
    id: int;

    @Prop()
    titulo: string;

    @Prop()
    lancamento: Date;

    @Prop()
    lancamentoRemaster: Date;

    @Prop()
    personagens: string;

    @Prop()
    temporada: int;

    @Prop()
    episodio: int;

    @Prop()
    locais: string;

    @Prop()
    abertura: string;
}

export const EpisodeSchema = SchemaFactory.createForClass(Episode);