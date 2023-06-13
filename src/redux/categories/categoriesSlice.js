import { createSlice } from "@reduxjs/toolkit";
const initialState = [];

const categorySlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        checkStatus: (state, { payload }) => {
            const newState = state.find((item) => item.status === payload.status);
            newState = 'Under construction';
        },
    }

});

export default categorySlice.reducer;