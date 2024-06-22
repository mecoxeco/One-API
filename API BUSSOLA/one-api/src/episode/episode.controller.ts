import { Controller, Get, Post, Body, Param, Delete } from 'nestjs/common';
import { EpisodeService } from './episode.service';
import { CreateEpisodeDto } from './dto/create-episode.dto';
// import { UpdateEpisodeDto } from './dto/update-episode.dto';

@Controller('episode')
export class EpisodeController {
    constructor(private readonly episodeService: EpisodeService) { }

    @Post
    create(@Body() createEpisodeDto: CreateEpisodeDto) {
        return this.episodeService.create(createEpisodeDto);
    }

    @Get()
    findAll() {
        return this.episodeService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: int) {
        return this.episodeService.findById(id);
    }

    // @Patch(':id')
    // update(@Param('id') id: int, @Body() updateEpisodeDto: UpdateEpisodeDto) {
    //     return this.episodeService.update(id, updateEpisodeDto);
    // }

    @Delete(':id')
    remove(@Param('id') id: int) {
        return this.episodeService.remove(id);
    }
}