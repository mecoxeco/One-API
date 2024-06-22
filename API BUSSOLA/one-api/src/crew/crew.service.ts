import { Injectable } from '@nestjs/common';
import { CreateCrewDto } from './dto/create-crew.dto';
//import { UpdateCrewDto } from './dto/update-crew.dto';
import { Crew } from './schemas/crew.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CrewService {
    constructor(@InjectModel(Crew.name) private CrewModel: Model<Crew>) { }

    create(createCrewDto: CreateCrewDto) {
        const createdCrew = this.crewModel.create(createCrewDto);
        return createdCrew;
    }

    findAll() {
        return this.crewModel.find();
    }

    findById(id: int) {
        return this.crewModel.findById(id);
    }

    // update(id: int, updateCrewDto: UpdateCrewDto) {
    //     return `This action updates a #${id} crew`;
    // }

    remove(id: int) {
        return this.crewModel.findByIdAndDelete(id);
    }
}