import { createAsyncThunk } from '@reduxjs/toolkit';

import { repositoryApi } from '../../api/repository/repository.api';
import { RepositoriesInput } from '../../api/repository/repository.schema';
import { endpoints } from '../../utils/constants/endpoints';

export const getRepositories = createAsyncThunk(
  endpoints.repositories,
  async (input: RepositoriesInput) => {
    const response = await repositoryApi.getRepositories(input);

    return { items: response.items, total: response.total_count };
  },
);
