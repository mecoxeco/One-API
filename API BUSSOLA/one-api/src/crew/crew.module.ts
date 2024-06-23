import { Module, HttpModule } from '@nestjs/common';
import { CrewService } from './crew.service';
import { CrewController } from './crew.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Crew, CrewSchema } from './schemas/crew.schema';
import { OnePieceApiService } from './one-piece-api.service';

@Module({
  imports: [
    HttpModule,
    MongooseModule.forFeature([{ name: Crew.name, schema: CrewSchema }]),
  ],
  controllers: [CrewController],
  providers: [CrewService, OnePieceApiService],
})
export class CrewModule {}
