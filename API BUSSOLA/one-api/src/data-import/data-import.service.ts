import { Injectable, HttpService } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Chapter } from '../chapter/chapter.schema';
import { Character } from '../character/character.schema';
import { Crew } from '../crew/crew.schema';
import { DevilFruit } from '../devil-fruit/devil-fruit.schema';
import { Episode } from '../episode/episode.schema';

@Injectable()
export class DataImportService {
  private readonly baseUrl = 'http://localhost:8080';

  constructor(
    private readonly httpService: HttpService,
    @InjectModel(Chapter.name) private readonly chapterModel: Model<Chapter>,
    @InjectModel(Character.name) private readonly characterModel: Model<Character>,
    @InjectModel(Crew.name) private readonly crewModel: Model<Crew>,
    @InjectModel(DevilFruit.name) private readonly devilFruitModel: Model<DevilFruit>,
    @InjectModel(Episode.name) private readonly episodeModel: Model<Episode>,
  ) {}

  async importData(): Promise<any> {
    const chapters = await this.importChapters();
    const characters = await this.importCharacters();
    const crews = await this.importCrews();
    const devilFruits = await this.importDevilFruits();
    const episodes = await this.importEpisodes();

    return {
      message: 'Importação de dados concluída com sucesso',
      importedEntities: {
        chapters,
        characters,
        crews,
        devilFruits,
        episodes,
      },
    };
  }

  private async importChapters() {
    const { data } = await this.httpService.get(`${this.baseUrl}/chapter?limit=50`).toPromise();
    await this.chapterModel.insertMany(data);
    return data;
  }

  private async importCharacters() {
    const { data } = await this.httpService.get(`${this.baseUrl}/character?limit=50`).toPromise();
    await this.characterModel.insertMany(data);
    return data;
  }

  private async importCrews() {
    const { data } = await this.httpService.get(`${this.baseUrl}/crew?limit=50`).toPromise();
    await this.crewModel.insertMany(data);
    return data;
  }

  private async importDevilFruits() {
    const { data } = await this.httpService.get(`${this.baseUrl}/devil-fruit?limit=50`).toPromise();
    await this.devilFruitModel.insertMany(data);
    return data;
  }

  private async importEpisodes() {
    const { data } = await this.httpService.get(`${this.baseUrl}/episode?limit=50`).toPromise();
    await this.episodeModel.insertMany(data);
    return data;
  }
}
