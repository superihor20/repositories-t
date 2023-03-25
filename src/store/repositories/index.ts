import { createSlice } from '@reduxjs/toolkit';

import { Repositories } from '../../api/repository/repository.schema';

import { getRepositoriesByName } from './get-repositories.thunk';

import type { PayloadAction } from '@reduxjs/toolkit';

export type RepositoriesState = {
  repositories: Repositories;
  page: number;
};

const initialState: RepositoriesState = {
  repositories: [],
  page: 1,
};

export const repositoriesSlice = createSlice({
  name: 'repositories',
  initialState,
  reducers: {
    nextPage: (state) => {
      state.page++;
    },
    prevPage: (state) => {
      state.page = Math.max(1, state.page - 1);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      getRepositoriesByName.fulfilled,
      (state, action: PayloadAction<Repositories>) => {
        state.repositories = action.payload;
      },
    );
  },
});

export const { nextPage, prevPage } = repositoriesSlice.actions;

export const repositoriesReducer = repositoriesSlice.reducer;
