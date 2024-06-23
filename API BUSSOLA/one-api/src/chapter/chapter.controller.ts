import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ChapterService } from './chapter.service';
import { CreateChapterDto } from './dto/create-chapter.dto';
import { UpdateChapterDto } from './dto/update-chapter.dto'; // Importe o DTO de atualização

@Controller('chapter')
export class ChapterController {
    constructor(private readonly chapterService: ChapterService) { }

    @Post()
    async criar(@Body() createChapterDto: CreateChapterDto) {
        return this.chapterService.criar(createChapterDto);
    }

    @Get()
    async buscarTodos() {
        return this.chapterService.buscarTodos();
    }

    @Get(':id')
    async buscarUm(@Param('id') id: string) {
        return this.chapterService.buscarPorId(id);
    }

    @Put(':id')
    async atualizar(@Param('id') id: string, @Body() updateChapterDto: UpdateChapterDto) {
        return this.chapterService.atualizar(id, updateChapterDto);
    }

    @Delete(':id')
    async remover(@Param('id') id: string) {
        return this.chapterService.remover(id);
    }
}
