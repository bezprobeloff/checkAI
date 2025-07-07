import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('test')
  async getStatusAvtomat() {
    const test = await this.appService.getStatusAvtomat();
    return test;
  }

  // здесь переберешь массив вызовов и узнаешь конечный результат
  @Get('all')
  getAllStatuses() {
    return 'all';
  }
}
