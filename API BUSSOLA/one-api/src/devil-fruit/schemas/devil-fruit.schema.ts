import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type DevilFruitDocument = HydratedDocument<DevilFruit>;

@Schema()
export class DevilFruit {
    @Prop()
    id: number;

    @Prop()
    nome: string;

    @Prop()
    tipo: string;

    @Prop()
    significado: string;

    @Prop()
    firstAparicao: string;

    @Prop()
    firstUso: string;

    @Prop()
    usuAtual: string;

    @Prop()
    usuAnterior: string;
}

export const DevilFruitSchema = SchemaFactory.createForClass(DevilFruit);
