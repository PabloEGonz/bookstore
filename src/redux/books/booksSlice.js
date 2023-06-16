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

export const addBooks = createAsyncThunk('books/addBooks',
  async (obj, thunkAPI) => {
    try {
      const res = await axios.post(url, obj);
      thunkAPI.dispatch(getBooks());
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  });

export const deleteBook = createAsyncThunk('books/deleteBook',
  async (id, thunkAPI) => {
    try {
      const res = await axios.delete(`${url}/${id}`);
      thunkAPI.dispatch(getBooks());
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  });

const initialState = {
  books: [],
  isLoading: false,
  error: undefined,
  addNew: false,
  deleted: false,
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
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
      })
      .addCase(addBooks.pending, (state) => {
        state.addNew = undefined;
      })
      .addCase(addBooks.fulfilled, (state) => {
        state.addNew = true;
      })
      .addCase(addBooks.rejected, (state) => {
        state.addNew = false;
      })
      .addCase(deleteBook.pending, (state) => {
        state.deleted = false;
      })
      .addCase(deleteBook.fulfilled, (state) => {
        state.deleted = true;
      })
      .addCase(deleteBook.rejected, (state) => {
        state.deleted = false;
      });
  },
});
export default bookSlice.reducer;
