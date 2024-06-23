import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { CharacterService } from './character.service';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto'; // Importe o DTO de atualização

@Controller('character')
export class CharacterController {
    constructor(private readonly characterService: CharacterService) { }

    @Post()
    async create(@Body() createCharacterDto: CreateCharacterDto) {
        return this.characterService.create(createCharacterDto);
    }

    @Get()
    async findAll() {
        return this.characterService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return this.characterService.findById(id);
    }

    @Patch(':id') 
    async update(@Param('id') id: string, @Body() updateCharacterDto: UpdateCharacterDto) {
        return this.characterService.update(id, updateCharacterDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        return this.characterService.remove(id);
    }
}
