// one-api/src/chapter/one-piece-api.service.ts

import { Injectable, HttpService } from '@nestjs/common';

@Injectable()
export class OnePieceApiService {
  private readonly baseUrl = 'http://localhost:8080';

  constructor(private readonly httpService: HttpService) {}

  async getCharacter(id: number) {
    const response = await this.httpService.get(`${this.baseUrl}/character/${id}`).toPromise();
    return response.data;
  }

  async createCharacter(character: any) {
    const response = await this.httpService.post(`${this.baseUrl}/character`, character).toPromise();
    return response.data;
  }

  async updateCharacter(id: number, character: any) {
    const response = await this.httpService.put(`${this.baseUrl}/character/${id}`, character).toPromise();
    return response.data;
  }

  async deleteCharacter(id: number) {
    const response = await this.httpService.delete(`${this.baseUrl}/character/${id}`).toPromise();
    return response.data;
  }
}
