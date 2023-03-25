import { AxiosInstance } from 'axios';

import { endpoints } from '../../utils/constants/endpoints';
import { axiosInstance } from '../axiosInstance';

import { RepositoriesInput, RepositoriesResponse } from './repository.schema';

class RepositoryApi {
  #requestInstance: AxiosInstance;

  constructor(axiosInstance: AxiosInstance) {
    this.#requestInstance = axiosInstance;
  }

  getRepositoriesByName = async ({
    name,
    page,
  }: RepositoriesInput): Promise<RepositoriesResponse> => {
    return this.#requestInstance.get(
      `${endpoints.repositories}?q=${name}&per_page=20&page=${page}`,
    );
  };
}

export const repositoryApi = new RepositoryApi(axiosInstance);
