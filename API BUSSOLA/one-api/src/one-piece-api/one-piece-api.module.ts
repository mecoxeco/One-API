import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { OnePieceApiService } from './one-piece-api.service';

@Module({
  imports: [HttpModule],
  providers: [OnePieceApiService],
  exports: [OnePieceApiService],
})
export class OnePieceApiModule {}
