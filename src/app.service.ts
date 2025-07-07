import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private httpService: HttpService) {}

  getHello(): string {
    return 'Hello World!';
  }

  async getStatusAvtomat() {
    const url = 'https://api.avtomat.dev.x840.ru/auth';
    // TODO подставь потом сюда данные через ENV
    const body = { phone: '', password: '' };

    try {
      const response = await firstValueFrom(this.httpService.post(url, body));
      console.log(response.data);
      // здесь длиннный код где вставляешь токен и потом подключаешься куда-то и тд
      // или статусы

      return {
        success: true,
        name: url,
      };
    } catch {
      return {
        success: false,
        name: url,
      };
    }
  }
}
