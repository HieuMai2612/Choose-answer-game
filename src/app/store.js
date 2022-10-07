import { configureStore } from '@reduxjs/toolkit';
import counterReducer from "../features/CreateSlice";


export const store = configureStore({
    reducer: {
        counter: counterReducer,

    },
});
