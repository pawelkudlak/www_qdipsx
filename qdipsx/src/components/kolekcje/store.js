import { configureStore } from "@reduxjs/toolkit";
import ps1GamesReducer from "./ps1GamesSlice";

export const store = configureStore({
    reducer: {
        ps1Games: ps1GamesReducer
    },
});