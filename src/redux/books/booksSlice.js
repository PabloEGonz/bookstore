import { createSlice } from "@reduxjs/toolkit";
const initialState = [];

const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        addBook: (state, { payload }) => {
            state.push(payload);
        },
        removeBook: (state, { payload }) => {
            state = state.filter((book) => book.id !== payload)
        }
    }

});

export default bookSlice.reducer;