import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { DevilFruitService } from './devil-fruit.service';
import { CreateDFDto } from './dto/create-df.dto';
import { UpdateDFDto } from './dto/update-df.dto';

@Controller('devil-fruit')
export class DevilFruitController {
    constructor(private readonly devilFruitService: DevilFruitService) {}

    @Post()
    async criar(@Body() createDFDto: CreateDFDto) {
        return this.devilFruitService.criar(createDFDto);
    }

    @Get()
    async buscarTodos() {
        return this.devilFruitService.buscarTodos();
    }

    @Get(':id')
    async buscarUm(@Param('id') id: string) {
        return this.devilFruitService.buscarPorId(id);
    }

    @Put(':id')
    async atualizar(@Param('id') id: string, @Body() updateDFDto: UpdateDFDto) {
        return this.devilFruitService.atualizar(id, updateDFDto);
    }

    @Delete(':id')
    async remover(@Param('id') id: string) {
        return this.devilFruitService.remover(id);
    }
}
