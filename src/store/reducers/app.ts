import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const getState = () => ({
  isShowingSidebarMenu: false,
});

export const appSlice = createSlice({
  name: 'app',
  initialState: getState(),
  reducers: {
    showSidebarMenu: (state, action: PayloadAction<boolean>) => {
      state.isShowingSidebarMenu = action.payload;
    },
  },
});

export default appSlice.reducer;
