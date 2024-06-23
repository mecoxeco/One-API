import { Injectable, HttpService } from '@nestjs/common';

@Injectable()
export class OnePieceApiService {
  private readonly baseUrl = 'http://localhost:8080';

  constructor(private readonly httpService: HttpService) {}

  async getChapter(id: number) {
    const response = await this.httpService.get(`${this.baseUrl}/chapter/${id}`).toPromise();
    return response.data;
  }

  async createChapter(chapter: any) {
    const response = await this.httpService.post(`${this.baseUrl}/chapter`, chapter).toPromise();
    return response.data;
  }

  async updateChapter(id: number, chapter: any) {
    const response = await this.httpService.put(`${this.baseUrl}/chapter/${id}`, chapter).toPromise();
    return response.data;
  }

  async deleteChapter(id: number) {
    const response = await this.httpService.delete(`${this.baseUrl}/chapter/${id}`).toPromise();
    return response.data;
  }
}
