import { Controller, Get, Post, Body, Param, Delete } from 'nestjs/common';
import { ChapterService } from './chapter.service';
import { CreateChapterDto } from './dto/create-chapter.dto';
import { UpdateChapterDto } from './dto/update-chapter.dto';
// import { UpdateChapterDto } from './dto/update-chapter.dto';

@Controller('chapter')
export class ChapterController {
    constructor(private readonly chapterService: ChapterService) { }

    @Post
    create(@Body() createCapterDto: CreateChapterDto) {
        return this.chapterService.create(createCapterDto);
    }

    @Get()
    findAll() {
        return this.chapterService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: int) {
        return this.chapterService.findById(id);
    }

    // @Patch(':id')
    // update(@Param('id') id: int, @Body() updateChapterDto: UpdateChapterDto) {
    //     return this.chapterService.update(id, updateChapterDto);
    // }

    @Delete(':id')
    remove(@Param('id') id: int) {
        return this.chapterService.remove(id);
    }
}