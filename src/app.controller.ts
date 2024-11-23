import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller({
  version: '3',
})
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  getHomeAPI() {
    return {
      VERSION: '1.0.0',
      message: 'NestJS API running...',
    };
  }

  @Get('/hello')
  getHello(): string {
    return this.appService.getHello();
  }
}
