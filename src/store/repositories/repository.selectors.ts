import { RootState } from '../configuration';

export const getSearchValue = (state: RootState) => state.repositoriesState.searchValue;

export const getPage = (state: RootState) => state.repositoriesState.page;

export const getRepositories = (state: RootState) => state.repositoriesState.repositories;

export const getTotal = (state: RootState) => state.repositoriesState.total;
