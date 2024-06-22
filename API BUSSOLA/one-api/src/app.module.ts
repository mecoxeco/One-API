import { Module } from '@nestjs/common';
import { ChapterModule } from './chapter/chapter.module';
import { CharacterModule } from './character/character.module';
import { CrewModule } from './crew/crew.module';
import { DevilFruitModule } from './devil-fruit/devil-fruit.module';
import { EpisodeModule } from './episode/episode.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://0.0.0.0/one-api'),
    ChapterModule,
    CharacterModule,
    CrewModule,
    DevilFruitModule,
    EpisodeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
