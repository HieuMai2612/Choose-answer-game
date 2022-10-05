import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const getAnswer = createAsyncThunk("answer/getAnswer", async () => {
    const res = await axios("https://opentdb.com/api.php?amount=2&type=multiple");
    return res.data.results;
});

const initialState = {
    name1: "",
    name2: "",
    questions: [],
    questionCount: 2,
};

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        saveName1: (state, action) => {
            state.name1 = action.payload;
        },
        saveName2: (state, action) => {
            state.name2 = action.payload;
        },
    },

    extraReducers: (builder) => {
        builder
            // .addCase(incrementAsync.pending, (state) => {
            // state.status = "loading";
            // })
            // .addCase(incrementAsync.fulfilled, (state, action) => {
            // state.status = "idle";
            // state.value += action.payload;
            // });
            .addCase(getAnswer.fulfilled, (state, action) => {
                state.questions = (action.payload);
            });
    },
});

export const { saveName1, saveName2 } = counterSlice.actions;
export const name1 = (state) => state.counter.name1;
export const name2 = (state) => state.counter.name2;
export const questions = (state) => state.counter.questions;
export const questionCount = (state) => state.counter.questionCount;

export default counterSlice.reducer;