import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  male: 'мужчины',
  female: '',
  maleItem: '',
  isFemaleOpen: false,
  isMaleOpen: false,
  maleActive: null,
  femaleActive: null,
};

const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    setMale(state, action: PayloadAction<string>) {
      state.male = action.payload;
    },
    setFemale(state, action: PayloadAction<string>) {
      state.female = action.payload;
    },
    setMaleItem(state, action: PayloadAction<string>) {
      state.maleItem = action.payload;
    },
    setIsFemaleOpen(state, action: PayloadAction<boolean>) {
      state.isFemaleOpen = action.payload;
    },
    setIsMaleOpen(state, action: PayloadAction<boolean>) {
      state.isMaleOpen = action.payload;
    },
    setMaleActive(state, action: PayloadAction<any>) {
      state.maleActive = action.payload;
    },
    setFemaleActive(state, action: PayloadAction<any>) {
      state.femaleActive = action.payload;
    },
  },
});

export const {
  setMale,
  setFemale,
  setMaleItem,
  setIsFemaleOpen,
  setIsMaleOpen,
  setFemaleActive,
  setMaleActive,
} = sortSlice.actions;

export default sortSlice.reducer;
