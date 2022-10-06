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
    results: {},
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
            // state.results.push(action.payload);
            // console.log(state.results[action.payload]);
            // console.log(action.payload)

            const data = action.payload;
            console.log("data", data)
            if (!state.results[data.players]) {
                state.results[data.players] = {
                    namePlayer: '',
                    answerPlayer: [],
                    answerApi: [],
                    score: 0,
                };
            }

            state.results[data.players].namePlayer = data.players;
            state.results[data.players].answerPlayer.push(data.answerUser);
            state.results[data.players].answerApi.push(data.apiResult);
            console.log(state.results[data.players])
            if (data.answerUser === data.apiResult) {
                state.results[data.players].score = state.results[data.players].score + 1;
            }


        },
        nextQuestion: (state, action) => {
            state.indexQuestion += 1;
            state.questionCount -= 1;
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
        },
        countQuestion: (state, action) => {
            state.questionCount -= 1;
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(getAnswer.fulfilled, (state, action) => {
                state.questions = (action.payload);
            });
    },
});

export const { saveName1, saveName2, saveResult, nextQuestion, savePlayers, nextPlayer, countQuestion } = counterSlice.actions;
export const name1 = (state) => state.counter.name1;
export const name2 = (state) => state.counter.name2;
export const questions = (state) => state.counter.questions;
export const questionCount = (state) => state.counter.questionCount;
export const playerCount = (state) => state.counter.playerCount;
export const indexQuestion = (state) => state.counter.indexQuestion;
export const getPlayer = (state) => state.counter.getPlayer;
export const results = (state) => state.counter.results;

export default counterSlice.reducer;