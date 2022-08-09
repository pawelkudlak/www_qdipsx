import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    ps2Games: [],
    error: undefined
}

export const fetchPS2Games = createAsyncThunk("ps2Games/fetchPS2Games", () => {
    return fetch("http://localhost:3000/PS2")
        .then(response => response.json())
        .then((data) => data)
        .catch((error) => error);
})

export const ps2GamesSlice = createSlice({
    name: "ps2Games",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchPS2Games.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchPS2Games.fulfilled, (state, action) => {
            state.isLoading = false;
            state.ps2Games = action.payload;
        });
        builder.addCase(fetchPS2Games.rejected, (state, action) => {
            state.isLoading = false;
            state.ps2Games = [];
            state.error = action.payload;
        })

    }
})

export default ps2GamesSlice.reducer;