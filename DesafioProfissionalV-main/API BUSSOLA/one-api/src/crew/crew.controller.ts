import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { CrewService } from './crew.service';
import { CreateCrewDto } from './dto/create-crew.dto';
import { UpdateCrewDto } from './dto/update-crew.dto';

@Controller('crew')
export class CrewController {
    constructor(private readonly crewService: CrewService) {}

    @Post()
    async criar(@Body() createCrewDto: CreateCrewDto) {
        return this.crewService.criar(createCrewDto);
    }

    @Get()
    async buscarTodos() {
        return this.crewService.buscarTodos();
    }

    @Get(':id')
    async buscarUm(@Param('id') id: string) {
        return this.crewService.buscarPorId(id);
    }

    @Put(':id')
    async atualizar(@Param('id') id: string, @Body() updateCrewDto: UpdateCrewDto) {
        return this.crewService.atualizar(id, updateCrewDto);
    }

    @Delete(':id')
    async remover(@Param('id') id: string) {
        return this.crewService.remover(id);
    }
}
