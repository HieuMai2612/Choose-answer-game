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
    results: [],
    score: 0,
    playerCount: 0,
    indexQuestion: 0,
    getPlayer: [],
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
        saveResult: (state, action) => {
            state.results.push(action.payload);
        },
        nextQuestion: (state, action) => {
            state.indexQuestion += 1;

            if (state.indexQuestion === 1 && state.playerCount === 1) {
                state.playerCount -= 1;

            }
        },
        savePlayers: (state, action) => {
            state.getPlayer = [state.name1, state.name2];
        },
        nextPlayer: (state, action) => {
            state.playerCount += 1;


            if (state.indexQuestion === 1 && state.playerCount === 0) {
                state.indexQuestion = 0;
            }
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(getAnswer.fulfilled, (state, action) => {
                state.questions = (action.payload);
            });
    },
});

export const { saveName1, saveName2, saveResult, nextQuestion, savePlayers, nextPlayer } = counterSlice.actions;
export const name1 = (state) => state.counter.name1;
export const name2 = (state) => state.counter.name2;
export const questions = (state) => state.counter.questions;
export const questionCount = (state) => state.counter.questionCount;
export const playerCount = (state) => state.counter.playerCount;
export const indexQuestion = (state) => state.counter.indexQuestion;
export const getPlayer = (state) => state.counter.getPlayer;

export default counterSlice.reducer;