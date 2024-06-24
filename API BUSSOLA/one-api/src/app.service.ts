import { Injectable, NestMiddleware, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Log, LogDocument } from './schemas/log.schema';

@Injectable()
export class AppService {
  constructor(@InjectModel(Log.name) private logModel: Model<LogDocument>) {}

  async createLog(route: string, method: string, responseTime: number) {
    const log = new this.logModel({ route, method, responseTime });
    return log.save();
  }
}

export class ResponseTimeMiddleware implements NestMiddleware {
  private logger = new Logger('HTTP');

  constructor(private readonly appService: AppService) {}

  use(req: any, res: any, next: () => void) {
    const start = Date.now();
    res.on('finish', () => {
      const responseTime = Date.now() - start;
      const { method, originalUrl } = req;
      this.logger.log(`${method} ${originalUrl} ${responseTime}ms`);

      this.appService.createLog(originalUrl, method, responseTime);
    });
    next();
  }
}
