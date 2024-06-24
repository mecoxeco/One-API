import { Injectable, NestMiddleware, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Log, LogDocument } from './schemas/log.schema';

@Injectable()
export class AppService {
  constructor(@InjectModel(Log.name) private logModel: Model<LogDocument>) {}

  async criarLog(roda: string, metodo: string, tempoResposta: number) {
    const log = new this.logModel({ rota, metodo, tempoResposta });
    return log.save();
  }
}

// ::: Middleware para logs :::
export class ResponseTimeMiddleware implements NestMiddleware {
  private logger = new Logger('HTTP');

  constructor(private readonly appService: AppService) {}

  use(req: any, res: any, next: () => void) {
    const start = Date.now();
    res.on('finish', async () => {
      const tempoResposta = Date.now() - start;
      const { method, originalUrl } = req;
      this.logger.log(`${method} ${originalUrl} ${tempoResposta}ms`);

      try {
        await this.appService.criarLog(originalUrl, method, tempoResposta);
      } catch (error) {
        this.logger.error(`Falha ao registrar tempo de resposta: ${error.message}`);
      }
    });
    next();
  }
}
