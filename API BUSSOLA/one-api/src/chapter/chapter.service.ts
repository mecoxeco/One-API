import { Injectable } from '@nestjs/common';
import { CreateChapterDto } from './dto/create-chapter.dto';
import { UpdateChapterDto } from './dto/update-chapter.dto'; 
import { Chapter } from './schemas/chapter.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { OnePieceApiService } from './one-piece-api.service';

@Injectable()
export class ChapterService {
    constructor(
        @InjectModel(Chapter.name) private chapterModel: Model<Chapter>,
        private onePieceApiService: OnePieceApiService
    ) { }

    async criar(createChapterDto: CreateChapterDto) {
        const createdChapter = await this.chapterModel.create(createChapterDto);
        await this.onePieceApiService.createChapter(createdChapter);
        return createdChapter;
    }

    async buscarTodos() {
        return this.chapterModel.find().exec();
    }

    async buscarPorId(id: string) {
        return this.onePieceApiService.getChapter(parseInt(id));
    }

    async atualizar(id: string, updateChapterDto: UpdateChapterDto) {
        const updatedChapter = await this.chapterModel.findByIdAndUpdate(id, updateChapterDto, { new: true });
        await this.onePieceApiService.updateChapter(parseInt(id), updateChapterDto);
        return updatedChapter;
    }

    async remover(id: string) {
        const deletedChapter = await this.chapterModel.findByIdAndDelete(id);
        await this.onePieceApiService.deleteChapter(parseInt(id));
        return deletedChapter;
    }
}
