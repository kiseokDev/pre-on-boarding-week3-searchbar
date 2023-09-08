import { SickType } from '../types/sickType';
import { AxiosHttpClient } from './axiosHttpClient';

// const server = process.env.REACT_APP_SERVER_URL;
// const server = process.env.REACT_APP_LOCAL_URL;
const server = process.env.REACT_APP_DISEASE_DB;

if (!server) {
  throw new Error('REACT_APP_SERVER_URL is not set');
}

export class DiseaseSearchAPI {
  #endPoint = 'sick';
  #client;
  constructor() {
    this.#client = new AxiosHttpClient(server!);
  }
  async getDiseaseList(query: string): Promise<SickType[]> {
    console.info('calling api');
    return await this.#client.get(`${this.#endPoint}?q=${query}`);
  }
}
