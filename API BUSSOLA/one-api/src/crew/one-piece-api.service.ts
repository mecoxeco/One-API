import { Injectable, HttpService } from '@nestjs/common';

@Injectable()
export class OnePieceApiService {
  private readonly baseUrl = 'http://localhost:8080';

  constructor(private readonly httpService: HttpService) {}

  async getCrew(id: number) {
    const response = await this.httpService.get(`${this.baseUrl}/crew/${id}`).toPromise();
    return response.data;
  }

  async createCrew(crew: any) {
    const response = await this.httpService.post(`${this.baseUrl}/crew`, crew).toPromise();
    return response.data;
  }

  async updateCrew(id: number, crew: any) {
    const response = await this.httpService.put(`${this.baseUrl}/crew/${id}`, crew).toPromise();
    return response.data;
  }

  async deleteCrew(id: number) {
    const response = await this.httpService.delete(`${this.baseUrl}/crew/${id}`).toPromise();
    return response.data;
  }
}
