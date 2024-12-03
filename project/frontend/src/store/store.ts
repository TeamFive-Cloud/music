import { configureStore } from '@reduxjs/toolkit';
import { musicReducer } from './slices/musicSlice';
import { authReducer } from './slices/authSlice';

export const store = configureStore({
  reducer: {
    music: musicReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;