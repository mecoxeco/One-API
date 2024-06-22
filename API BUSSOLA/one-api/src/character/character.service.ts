import { Injectable } from '@nestjs/common';
import { CreateCharacterDto } from './dto/create-character.dto';
//import { UpdateCharacterDto } from './dto/update-character.dto';
import { Character } from './schemas/character.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CharacterService {
    constructor(@InjectModel(Character.name) private characterModel: Model<Character>) { }

    create(createCharacterDto: CreateCharacterDto) {
        const createdCharacter = this.characterModel.create(createCharacterDto);
        return createdCharacter;
    }

    findAll() {
        return this.characterModel.find();
    }

    findById(id: int) {
        return this.characterModel.findById(id);
    }

    // update(id: int, updateCharacterDto: UpdatCharacterDto) {
    //     return `This action updates a #${id} character`;
    // }

    remove(id: int) {
        return this.characterModel.findByIdAndDelete(id);
    }
}