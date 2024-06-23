import { Module, HttpModule } from '@nestjs/common';
import { EpisodeService } from './episode.service';
import { EpisodeController } from './episode.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Episode, EpisodeSchema } from './schemas/episode.schema';
import { OnePieceApiService } from './one-piece-api.service';

@Module({
  imports: [
    HttpModule,
    MongooseModule.forFeature([{ name: Episode.name, schema: EpisodeSchema }]),
  ],
  controllers: [EpisodeController],
  providers: [EpisodeService, OnePieceApiService],
})
export class EpisodeModule {}
