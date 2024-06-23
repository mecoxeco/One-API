import { Injectable, HttpService } from '@nestjs/common';

@Injectable()
export class OnePieceApiService {
  private readonly baseUrl = 'http://localhost:8080';

  constructor(private readonly httpService: HttpService) {}

  // CHAPTER ENTITY
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

  // CHARACTER ENTITY
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

  // CREW ENTITY
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

  // DEVILFRUIT ENTITY
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

  // EPISODES ENTITY
  async getEpisode(id: number) {
    const response = await this.httpService.get(`${this.baseUrl}/episode/${id}`).toPromise();
    return response.data;
  }

  async createEpisode(episode: any) {
    const response = await this.httpService.post(`${this.baseUrl}/episode`, episode).toPromise();
    return response.data;
  }

  async updateEpisode(id: number, episode: any) {
    const response = await this.httpService.put(`${this.baseUrl}/episode/${id}`, episode).toPromise();
    return response.data;
  }

  async deleteEpisode(id: number) {
    const response = await this.httpService.delete(`${this.baseUrl}/episode/${id}`).toPromise();
    return response.data;
  }
}
