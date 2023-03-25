import { configureStore } from '@reduxjs/toolkit';

import { repositoriesReducer } from './repositories';

export const store = configureStore({
  reducer: {
    repositoriesState: repositoriesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
