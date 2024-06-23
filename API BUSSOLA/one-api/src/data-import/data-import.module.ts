import { Module } from '@nestjs/common';
import { DataImportService } from './data-import.service';
import { DataImportController } from './data-import.controller';
import { OnePieceApiModule } from '../one-piece-api/one-piece-api.module';
import { ChapterModule } from '../chapter/chapter.module';
import { CharacterModule } from '../character/character.module';
import { CrewModule } from '../crew/crew.module';
import { DevilFruitModule } from '../devil-fruit/devil-fruit.module';
import { EpisodeModule } from '../episode/episode.module';

@Module({
  imports: [
    OnePieceApiModule,
    ChapterModule,
    CharacterModule,
    CrewModule,
    DevilFruitModule,
    EpisodeModule,
  ],
  controllers: [DataImportController],
  providers: [DataImportService],
})
export class DataImportModule {}
