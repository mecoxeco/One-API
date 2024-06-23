import { Injectable } from '@nestjs/common';
import { CreateDFDto } from './dto/create-df.dto';
import { UpdateDFDto } from './dto/update-df.dto';
import { DevilFruit } from './schemas/devil-fruit.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { OnePieceApiService } from '../one-piece-api/one-piece-api.service';

@Injectable()
export class DevilFruitService {
  constructor(
    @InjectModel(DevilFruit.name) private devilFruitModel: Model<DevilFruit>,
    private onePieceApiService: OnePieceApiService
  ) {}

  async criar(createDFDto: CreateDFDto) {
    const createdDevilFruit = await this.devilFruitModel.create(createDFDto);
    await this.onePieceApiService.createDevilFruit(createdDevilFruit);
    return createdDevilFruit;
  }

  async buscarTodos() {
    return this.devilFruitModel.find().exec();
  }

  async buscarPorId(id: string) {
    return this.onePieceApiService.getDevilFruit(parseInt(id));
  }

  async atualizar(id: string, updateDFDto: UpdateDFDto) {
    const updatedDevilFruit = await this.devilFruitModel.findByIdAndUpdate(id, updateDFDto, { new: true });
    await this.onePieceApiService.updateDevilFruit(parseInt(id), updateDFDto);
    return updatedDevilFruit;
  }

  async remover(id: string) {
    const deletedDevilFruit = await this.devilFruitModel.findByIdAndDelete(id);
    await this.onePieceApiService.deleteDevilFruit(parseInt(id));
    return deletedDevilFruit;
  }
}
