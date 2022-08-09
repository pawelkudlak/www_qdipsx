import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    ps4Games: [],
    error: undefined
}

export const fetchPS4Games = createAsyncThunk("ps4Games/fetchPS4Games", () => {
    return fetch("http://localhost:3000/PS4")
        .then(response => response.json())
        .then((data) => data)
        .catch((error) => error);
})

export const ps4GamesSlice = createSlice({
    name: "ps4Games",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchPS4Games.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchPS4Games.fulfilled, (state, action) => {
            state.isLoading = false;
            state.ps4Games = action.payload;
        });
        builder.addCase(fetchPS4Games.rejected, (state, action) => {
            state.isLoading = false;
            state.ps4Games = [];
            state.error = action.payload;
        })

    }
})

export default ps4GamesSlice.reducer;