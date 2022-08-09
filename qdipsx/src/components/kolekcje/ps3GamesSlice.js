import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    ps3Games: [],
    error: undefined
}

export const fetchPS3Games = createAsyncThunk("ps3Games/fetchPS3Games", () => {
    return fetch("http://localhost:3000/PS3")
        .then(response => response.json())
        .then((data) => data)
        .catch((error) => error);
})

export const ps3GamesSlice = createSlice({
    name: "ps3Games",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchPS3Games.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchPS3Games.fulfilled, (state, action) => {
            state.isLoading = false;
            state.ps3Games = action.payload;
        });
        builder.addCase(fetchPS3Games.rejected, (state, action) => {
            state.isLoading = false;
            state.ps3Games = [];
            state.error = action.payload;
        })

    }
})

export default ps3GamesSlice.reducer;