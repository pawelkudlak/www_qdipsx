import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    games: [],
    error: undefined
}

export const fetchGames = createAsyncThunk("games/fetchGames", () => {
    return fetch("http://localhost:3000/")
        .then(response => response.json())
        .then((data) => data)
        .catch((error) => error);
})

export const gamesSlice = createSlice({
    name: "games",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchGames.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchGames.fulfilled, (state, action) => {
            state.isLoading = false;
            state.games = action.payload;
        });
        builder.addCase(fetchGames.rejected, (state, action) => {
            state.isLoading = false;
            state.games = [];
            state.error = action.payload;
        })

    }
})

export default gamesSlice.reducer;