import { Injectable } from '@nestjs/common';
import { CreateDevilFruitDto } from './dto/create-devil-fruit.dto';
//import { UpdateDevilFruitDto } from './dto/update-devil-fruit.dto';
import { DevilFruit } from './schemas/devil-fruit.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class DevilFruitService {
    constructor(@InjectModel(DevilFruit.name) private devilfruitModel: Model<DevilFruit>) { }

    create(createDevilFruitDto: CreateDevilFruitDto) {
        const createdDevilFruit = this.devilfruitModel.create(createDevilFruitDto);
        return createdDevilFruit;
    }

    findAll() {
        return this.devilfruitModel.find();
    }

    findById(id: int) {
        return this.devilfruitModel.findById(id);
    }

    // update(id: int, updateDevilFruitDto: UpdateDevilFruitDto) {
    //     return `This action updates a #${id} devilfruit`;
    // }

    remove(id: int) {
        return this.devilfruitModel.findByIdAndDelete(id);
    }
}