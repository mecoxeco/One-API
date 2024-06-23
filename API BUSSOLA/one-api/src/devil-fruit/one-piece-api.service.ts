import { Injectable, HttpService } from '@nestjs/common';

@Injectable()
export class OnePieceApiService {
  private readonly baseUrl = 'http://localhost:8080';

  constructor(private readonly httpService: HttpService) {}

  async getDevilFruit(id: number) {
    const response = await this.httpService.get(`${this.baseUrl}/devil-fruit/${id}`).toPromise();
    return response.data;
  }

  async createDevilFruit(devilFruit: any) {
    const response = await this.httpService.post(`${this.baseUrl}/devil-fruit`, devilFruit).toPromise();
    return response.data;
  }

  async updateDevilFruit(id: number, devilFruit: any) {
    const response = await this.httpService.put(`${this.baseUrl}/devil-fruit/${id}`, devilFruit).toPromise();
    return response.data;
  }

  async deleteDevilFruit(id: number) {
    const response = await this.httpService.delete(`${this.baseUrl}/devil-fruit/${id}`).toPromise();
    return response.data;
  }
}
