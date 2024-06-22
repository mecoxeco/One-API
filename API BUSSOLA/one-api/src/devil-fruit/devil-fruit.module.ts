import { Module } from '@nestjs/common';
import { DevilFruitService } from './devil-fruit.service';
import { DevilFruitController } from './devil-frui.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DevilFruit, DevilFruitSchema } from './schemas/devil-fruit.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: DevilFruit.name, schema: DevilFruitSchema }],)
    ],
    controllers: [DevilFruitController],
    providers: [DevilFruitService],
})

export class DevilFruitModule { }