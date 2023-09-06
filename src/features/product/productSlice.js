import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const setColor = createAsyncThunk('product/setColor', async (color, { dispatch }) => {
  localStorage.setItem('color', color);
  return color;
});

export const setSize = createAsyncThunk('product/setSize', async (size, { dispatch }) => {
  localStorage.setItem('size', size);
  return size;
});

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    color: localStorage.getItem('color') || 'grey',
    size: localStorage.getItem('size') || 's',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(setColor.fulfilled, (state, action) => {
        state.color = action.payload;
      })
      .addCase(setSize.fulfilled, (state, action) => {
        state.size = action.payload;
      });
  },
});

export default productSlice.reducer;
