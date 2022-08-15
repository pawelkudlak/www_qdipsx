import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    pspGames: [],
    error: undefined
}

export const fetchPSPGames = createAsyncThunk("pspGames/fetchPSPGames", () => {
    return fetch("http://localhost:3000/PSP")
        .then(response => response.json())
        .then((data) => data)
        .catch((error) => error);
})

export const pspGamesSlice = createSlice({
    name: "pspGames",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchPSPGames.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchPSPGames.fulfilled, (state, action) => {
            state.isLoading = false;
            state.pspGames = action.payload;
        });
        builder.addCase(fetchPSPGames.rejected, (state, action) => {
            state.isLoading = false;
            state.pspGames = [];
            state.error = action.payload;
        })

    }
})

export default pspGamesSlice.reducer;