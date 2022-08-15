import { configureStore } from "@reduxjs/toolkit";
import ps1GamesReducer from "./ps1GamesSlice";
import ps2GamesReducer from "./ps2GamesSlice";
import ps3GamesReducer from "./ps3GamesSlice";
import ps4GamesReducer from "./ps4GamesSlice";
import pspGamesReducer from "./pspGamesSlice";
// import gamesReducer from "./gamesSlice";

export const store = configureStore({
    reducer: {
        ps1Games: ps1GamesReducer,
        ps2Games: ps2GamesReducer,
        ps3Games: ps3GamesReducer,
        ps4Games: ps4GamesReducer,
        pspGames: pspGamesReducer
        // games: gamesReducer
    },
});