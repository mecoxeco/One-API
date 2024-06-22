import { Injectable } from '@nestjs/common';
import { CreateEpisodeDto } from './dto/create-episode.dto';
//import { UpdateEpisodeDto } from './dto/update-episode.dto';
import { Episode } from './schemas/episode.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class EpisodeService {
    constructor(@InjectModel(Episode.name) private episodeModel: Model<Episode>) { }

    create(createEpisodeDto: CreateEpisodeDto) {
        const createdEpisode = this.episodeModel.create(createEpisodeDto);
        return createdEpisode;
    }

    findAll() {
        return this.episodeModel.find();
    }

    findById(id: int) {
        return this.episodeModel.findById(id);
    }

    // update(id: int, updateEpisodeDto: UpdateEpisodeDto) {
    //     return `This action updates a #${id} episode`;
    // }

    remove(id: int) {
        return this.episodeModel.findByIdAndDelete(id);
    }
}