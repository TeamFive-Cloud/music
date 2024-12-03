import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Music {
  id: string;
  title: string;
  artist: string;
  description: string;
  price: number;
  imageUrl: string;
  level: string;
}

interface MusicState {
  items: Music[];
  loading: boolean;
  error: string | null;
}

const initialState: MusicState = {
  items: [],
  loading: false,
  error: null,
};

const musicSlice = createSlice({
  name: 'music',
  initialState,
  reducers: {
    setMusicList: (state, action: PayloadAction<Music[]>) => {
      state.items = action.payload;
      state.loading = false;
      state.error = null;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { setMusicList, setLoading, setError } = musicSlice.actions;
export const musicReducer = musicSlice.reducer;