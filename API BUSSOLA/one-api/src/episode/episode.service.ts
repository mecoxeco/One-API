import { Injectable } from '@nestjs/common';
import { CreateEpisodeDto } from './dto/create-episode.dto';
import { UpdateEpisodeDto } from './dto/update-episode.dto';
import { Episode } from './schemas/episode.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { OnePieceApiService } from '../one-piece-api/one-piece-api.service';

@Injectable()
export class EpisodeService {
  constructor(
    @InjectModel(Episode.name) private episodeModel: Model<Episode>,
    private onePieceApiService: OnePieceApiService
  ) {}

  async criar(createEpisodeDto: CreateEpisodeDto) {
    const createdEpisode = await this.episodeModel.create(createEpisodeDto);
    await this.onePieceApiService.createEpisode(createdEpisode);
    return createdEpisode;
  }

  async buscarTodos() {
    return this.episodeModel.find().exec();
  }

  async buscarPorId(id: string) {
    return this.onePieceApiService.getEpisode(parseInt(id));
  }

  async atualizar(id: string, updateEpisodeDto: UpdateEpisodeDto) {
    const updatedEpisode = await this.episodeModel.findByIdAndUpdate(id, updateEpisodeDto, { new: true });
    await this.onePieceApiService.updateEpisode(parseInt(id), updateEpisodeDto);
    return updatedEpisode;
  }

  async remover(id: string) {
    const deletedEpisode = await this.episodeModel.findByIdAndDelete(id);
    await this.onePieceApiService.deleteEpisode(parseInt(id));
    return deletedEpisode;
  }
}
