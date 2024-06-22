import { Injectable } from '@nestjs/common';
import { CreateChapterDto } from './dto/create-chapter.dto';
//import { UpdateChapterDto } from './dto/update-chapter.dto';
import { Chapter } from './schemas/chapter.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UpdateChapterDto } from './dto/update-chapter.dto';

@Injectable()
export class ChapterService {
    constructor(@InjectModel(Chapter.name) private chapterModel: Model<Chapter>) { }

    create(createChapterDto: CreateChapterDto) {
        const createdChapter = this.chapterModel.create(createChapterDto);
        return createdChapter;
    }

    findAll() {
        return this.chapterModel.find();
    }

    findById(id: int) {
        return this.chapterModel.findById(id);
    }

    // update(id: Int16Array, updateChapterDto: UpdateChapterDto) {
    //     return `This action updates a #${id} chapter`;
    // }

    remove(id: int) {
        return this.chapterModel.findByIdAndDelete(id);
    }
}