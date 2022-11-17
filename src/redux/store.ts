import { configureStore } from '@reduxjs/toolkit';
import paginationSlice from './paginationSlice';
import sortSlice from './sortSlice';

export const store = configureStore({
  reducer: {
    sortSlice,
    paginationSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
