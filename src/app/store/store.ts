import { configureStore } from '@reduxjs/toolkit';
import { testSlice } from '../../features/scratch/testSlice';


export const store = configureStore({
  reducer: testSlice.reducer
})