import { configureStore } from '@reduxjs/toolkit';
import sortSlice from './sortSlice';

export const store = configureStore({
  reducer: {
    sortSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
