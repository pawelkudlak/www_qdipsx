import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    ps1Games: [],
    error: undefined
}

export const fetchPS1Games = createAsyncThunk("ps1Games/fetchPS1Games", () => {
    return fetch("http://localhost:3000/PS1")
        .then(response => response.json())
        .then((data) => data)
        .catch((error) => error);
})

export const ps1GamesSlice = createSlice({
    name: "ps1Games",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchPS1Games.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchPS1Games.fulfilled, (state, action) => {
            state.isLoading = false;
            state.ps1Games = action.payload;
        });
        builder.addCase(fetchPS1Games.rejected, (state, action) => {
            state.isLoading = false;
            state.ps1Games = [];
            state.error = action.payload;
        })

    }
})

export default ps1GamesSlice.reducer;