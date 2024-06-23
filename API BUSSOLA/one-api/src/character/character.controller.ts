import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { CharacterService } from './character.service';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';

@Controller('character')
export class CharacterController {
    constructor(private readonly characterService: CharacterService) {}

    @Post()
    async criar(@Body() createCharacterDto: CreateCharacterDto) {
        return this.characterService.criar(createCharacterDto);
    }

    @Get()
    async buscarTodos() {
        return this.characterService.buscarTodos();
    }

    @Get(':id')
    async buscarUm(@Param('id') id: string) {
        return this.characterService.buscarPorId(id);
    }

    @Put(':id')
    async atualizar(@Param('id') id: string, @Body() updateCharacterDto: UpdateCharacterDto) {
        return this.characterService.atualizar(id, updateCharacterDto);
    }

    @Delete(':id')
    async remover(@Param('id') id: string) {
        return this.characterService.remover(id);
    }
}
