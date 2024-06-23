import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { EpisodeService } from './episode.service';
import { CreateEpisodeDto } from './dto/create-episode.dto';
import { UpdateEpisodeDto } from './dto/update-episode.dto';

@Controller('episode')
export class EpisodeController {
    constructor(private readonly episodeService: EpisodeService) {}

    @Post()
    async criar(@Body() createEpisodeDto: CreateEpisodeDto) {
        return this.episodeService.criar(createEpisodeDto);
    }

    @Get()
    async buscarTodos() {
        return this.episodeService.buscarTodos();
    }

    @Get(':id')
    async buscarUm(@Param('id') id: string) {
        return this.episodeService.buscarPorId(id);
    }

    @Put(':id')
    async atualizar(@Param('id') id: string, @Body() updateEpisodeDto: UpdateEpisodeDto) {
        return this.episodeService.atualizar(id, updateEpisodeDto);
    }

    @Delete(':id')
    async remover(@Param('id') id: string) {
        return this.episodeService.remover(id);
    }
}
