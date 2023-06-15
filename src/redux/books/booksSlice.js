import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import url from '../../api/api';

export const getBooks = createAsyncThunk('books/getBooks',
  async (thunkAPI) => {
    try {
      const res = await axios(url);
      const resp = res.data;
      const array = Object.values(resp);
      const id = Object.keys(resp);
      const newArray = [];
      array.forEach((ele, i) => {
        newArray.push({
          ...ele[0],
          item_id: id[i],
        });
      });
      return newArray;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  });
const initialState = {
  books: [],
  isLoading: false,
  error: undefined,
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, { payload }) => {
      state.books.push(payload);
    },
    removeBook: (state, { payload }) => {
      state.books = state.books.filter((book) => book.item_id !== payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBooks.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.books = payload;
      })
      .addCase(getBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.name;
      });
  },
});
export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
