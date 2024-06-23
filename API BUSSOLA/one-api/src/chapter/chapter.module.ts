import { Module, HttpModule } from '@nestjs/common';
import { ChapterService } from './chapter.service';
import { ChapterController } from './chapter.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Chapter, ChapterSchema } from './schemas/chapter.schema';
import { OnePieceApiService } from './one-piece-api.service';

@Module({
  imports: [
    HttpModule,
    MongooseModule.forFeature([{ name: Chapter.name, schema: ChapterSchema }]),
  ],
  controllers: [ChapterController],
  providers: [ChapterService, OnePieceApiService],
})
export class ChapterModule {}
