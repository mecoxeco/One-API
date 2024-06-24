import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import mongoose from 'mongoose';

@Controller()
export class AppController {
  constructor(private readonly configService: ConfigService) {
    this.connectToDatabase();
  }

  async connectToDatabase() {
    try {
      const uri = this.configService.get<string>('MONGODB_URI');
      await mongoose.connect(uri);
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
    }
  }

  @Get()
  getHello(): string {
    return 'Hello World!';
  }
}
