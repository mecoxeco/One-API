import { Controller, Get, Post, Body, Param, Delete } from 'nestjs/common';
import { DevilFruitService } from './devil-fruit.service';
import { CreateDevilFruitDto } from './dto/create-devil-fruit.dto';
// import { UpdateDevilFruitDto } from './dto/update-devil-fruit.dto';

@Controller('devil-fruit')
export class DevilFruitController {
    constructor(private readonly devilfruitService: DevilFruitService) { }

    @Post
    create(@Body() createDevilFruitDto: CreateDevilFruitDto) {
        return this.devilfruitService.create(createDevilFruitDto);
    }

    @Get()
    findAll() {
        return this.devilfruitService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: int) {
        return this.devilfruitService.findById(id);
    }

    // @Patch(':id')
    // update(@Param('id') id: int, @Body() updateDevilFruitDto: UpdateDevilFruitDto) {
    //     return this.devilfruitService.update(id, updateDevilFruitDto);
    // }

    @Delete(':id')
    remove(@Param('id') id: int) {
        return this.devilfruitService.remove(id);
    }
}