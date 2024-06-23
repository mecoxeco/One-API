import { Module, HttpModule } from '@nestjs/common';
import { CharacterService } from './character.service';
import { CharacterController } from './character.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Character, CharacterSchema } from './schemas/character.schema';
import { OnePieceApiService } from './one-piece-api.service';

@Module({
  imports: [
    HttpModule,
    MongooseModule.forFeature([{ name: Character.name, schema: CharacterSchema }]),
  ],
  controllers: [CharacterController],
  providers: [CharacterService, OnePieceApiService],
})
export class CharacterModule {}
