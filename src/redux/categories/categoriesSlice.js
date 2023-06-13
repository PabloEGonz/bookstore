import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: (state, { payload }) => {
      const newState = state.categories.find((item) => item.status === payload.status);
      newState.status = 'Under construction';
    },
  },

});

export default categorySlice.reducer;
