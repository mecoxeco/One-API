// one-api/src/character/schemas/character.schema.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CharacterDocument = HydratedDocument<Character>;

@Schema()
export class Character {
    @Prop()
    id: number;

    @Prop()
    nome: string;

    @Prop()
    idade: number;

    @Prop()
    status: string;

    @Prop()
    df: string;

    @Prop()
    dfId: number;

    @Prop()
    estreia: string;

    @Prop()
    mainAfiliado: string;

    @Prop()
    outrasAfiliacoes: string;

    @Prop()
    ocupacoes: string;

    @Prop()
    origem: string;

    @Prop()
    raca: string;

    @Prop()
    recompensa: string;

    @Prop()
    aniversario: Date;

    @Prop()
    altura: string;
}

export const CharacterSchema = SchemaFactory.createForClass(Character);
