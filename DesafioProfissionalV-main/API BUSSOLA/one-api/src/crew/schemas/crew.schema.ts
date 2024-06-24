import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CrewDocument = HydratedDocument<Crew>;

@Schema()
export class Crew {
    @Prop()
    id: number;

    @Prop()
    nome: string;

    @Prop()
    nomeRomanizado: string;

    @Prop()
    firstAparicao: string;

    @Prop()
    capitao: string;

    @Prop()
    recompensaTotal: string;

    @Prop()
    navioPrincipal: string;

    @Prop()
    membros: string;

    @Prop()
    aliados: string;
}

export const CrewSchema = SchemaFactory.createForClass(Crew);
