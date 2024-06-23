import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ChapterModule } from './chapter/chapter.module';
import { CharacterModule } from './character/character.module';
import { CrewModule } from './crew/crew.module';
import { DevilFruitModule } from './devil-fruit/devil-fruit.module';
import { EpisodeModule } from './episode/episode.module';
import { OnePieceApiModule } from './one-piece-api/one-piece-api.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/one-piece-api', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    ChapterModule,
    CharacterModule,
    CrewModule,
    DevilFruitModule,
    EpisodeModule,
    OnePieceApiModule, 
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
