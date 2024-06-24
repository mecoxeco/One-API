import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AppController } from './app.controller';
import { AppService, ResponseTimeMiddleware } from './app.service';
import { Log, LogSchema } from './schema/log.schema';
import { AuthModule } from './auth/auth.module';
import { ChapterModule } from './chapter/chapter.module';
import { CharacterModule } from './character/character.module';
import { CrewModule } from './crew/crew.module';
import { DevilFruitModule } from './devil-fruit/devil-fruit.module';
import { EpisodeModule } from './episode/episode.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './src.env',
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
      }),
      inject: [ConfigService],
    }),
    MongooseModule.forFeature([{ name: Log.name, schema: LogSchema }]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: '1h' },
      }),
      inject: [ConfigService],
    }),
    AuthModule,
    ChapterModule,
    CharacterModule,
    CrewModule,
    DevilFruitModule,
    EpisodeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
