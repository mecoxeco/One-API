import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCharacterDto } from './dto/create-character.dto';
import { Character } from './schemas/character.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CharacterService {
    constructor(@InjectModel(Character.name) private characterModel: Model<Character>) { }

    async create(createCharacterDto: CreateCharacterDto): Promise<Character> {
        const createdCharacter = new this.characterModel(createCharacterDto);
        return createdCharacter.save();
    }

    async findAll(): Promise<Character[]> {
        return this.characterModel.find().exec();
    }

    async findById(id: number): Promise<Character> {
        const character = await this.characterModel.findById(id).exec();
        if (!character) {
            throw new NotFoundException(`Personagem com ID ${id} não encontrado`);
        }
        return character;
    }

    async remove(id: number): Promise<Character> {
        return this.characterModel.findByIdAndDelete(id).exec();
    }
}
