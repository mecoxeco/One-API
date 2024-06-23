import { Injectable } from '@nestjs/common';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';
import { Character } from './schemas/character.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { OnePieceApiService } from './one-piece-api.service';

@Injectable()
export class CharacterService {
    constructor(
        @InjectModel(Character.name) private characterModel: Model<Character>,
        private onePieceApiService: OnePieceApiService
    ) {}

    async criar(createCharacterDto: CreateCharacterDto) {
        const createdCharacter = await this.characterModel.create(createCharacterDto);
        await this.onePieceApiService.createCharacter(createdCharacter);
        return createdCharacter;
    }

    async buscarTodos() {
        return this.characterModel.find().exec();
    }

    async buscarPorId(id: string) {
        return this.onePieceApiService.getCharacter(parseInt(id));
    }

    async atualizar(id: string, updateCharacterDto: UpdateCharacterDto) {
        const updatedCharacter = await this.characterModel.findByIdAndUpdate(id, updateCharacterDto, { new: true });
        await this.onePieceApiService.updateCharacter(parseInt(id), updateCharacterDto);
        return updatedCharacter;
    }

    async remover(id: string) {
        const deletedCharacter = await this.characterModel.findByIdAndDelete(id);
        await this.onePieceApiService.deleteCharacter(parseInt(id));
        return deletedCharacter;
    }
}
