import { Injectable } from '@nestjs/common';
import { CreateCrewDto } from './dto/create-crew.dto';
import { UpdateCrewDto } from './dto/update-crew.dto';
import { Crew } from './schemas/crew.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { OnePieceApiService } from '../one-piece-api/one-piece-api.service';

@Injectable()
export class CrewService {
  constructor(
    @InjectModel(Crew.name) private crewModel: Model<Crew>,
    private onePieceApiService: OnePieceApiService
  ) {}

  async criar(createCrewDto: CreateCrewDto) {
    const createdCrew = await this.crewModel.create(createCrewDto);
    await this.onePieceApiService.createCrew(createdCrew);
    return createdCrew;
  }

  async buscarTodos() {
    return this.crewModel.find().exec();
  }

  async buscarPorId(id: string) {
    return this.onePieceApiService.getCrew(parseInt(id));
  }

  async atualizar(id: string, updateCrewDto: UpdateCrewDto) {
    const updatedCrew = await this.crewModel.findByIdAndUpdate(id, updateCrewDto, { new: true });
    await this.onePieceApiService.updateCrew(parseInt(id), updateCrewDto);
    return updatedCrew;
  }

  async remover(id: string) {
    const deletedCrew = await this.crewModel.findByIdAndDelete(id);
    await this.onePieceApiService.deleteCrew(parseInt(id));
    return deletedCrew;
  }
}
