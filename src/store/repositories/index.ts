import { createSlice } from '@reduxjs/toolkit';

import { Repositories } from '../../api/repository/repository.schema';

import { getRepositories } from './get-repositories.thunk';

import type { PayloadAction } from '@reduxjs/toolkit';

export type RepositoriesState = {
  repositories: Repositories;
  page: number;
  searchValue: string;
  total: number;
};

const initialState: RepositoriesState = {
  repositories: [],
  page: 1,
  searchValue: '',
  total: 0,
};

export const repositoriesSlice = createSlice({
  name: 'repositories',
  initialState,
  reducers: {
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      getRepositories.fulfilled,
      (state, action: PayloadAction<{ items: Repositories; total: number }>) => {
        state.repositories = action.payload.items;
        state.total = action.payload.total;
      },
    );
    builder.addCase(getRepositories.rejected, (state) => {
      state.repositories = [];
    });
  },
});
export const { setPage, setSearchValue } = repositoriesSlice.actions;

export const repositoriesReducer = repositoriesSlice.reducer;
