import { configureStore } from '@reduxjs/toolkit';
import playerSlice from "../features/player/player.js";
import counterReducer from "../features/CreateSlice";


export const store = configureStore({
    reducer: {
        player: playerSlice,
        counter: counterReducer,

    },
});
