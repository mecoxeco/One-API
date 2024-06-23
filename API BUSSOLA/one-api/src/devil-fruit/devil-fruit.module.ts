import { Module, HttpModule } from '@nestjs/common';
import { DevilFruitService } from './devil-fruit.service';
import { DevilFruitController } from './devil-fruit.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DevilFruit, DevilFruitSchema } from './schemas/devil-fruit.schema';
import { OnePieceApiService } from './one-piece-api.service';

@Module({
  imports: [
    HttpModule,
    MongooseModule.forFeature([{ name: DevilFruit.name, schema: DevilFruitSchema }]),
  ],
  controllers: [DevilFruitController],
  providers: [DevilFruitService, OnePieceApiService],
})
export class DevilFruitModule {}
