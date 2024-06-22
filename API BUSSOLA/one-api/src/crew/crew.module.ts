import { Module } from '@nestjs/common';
import { CrewService } from './crew.service';
import { CrewController } from './crew.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Crew, CrewSchema } from './schemas/crew.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Crew.name, schema: CrewSchema }],)
    ],
    controllers: [CrewController],
    providers: [CrewService],
})

export class CrewModule { }