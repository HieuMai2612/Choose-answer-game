import { createSlice } from "@reduxjs/toolkit";

const playerSlice = createSlice({
    name: 'player',
    initialState: [
    ],
    reducers: {
        addPlayer: {
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare(name1, name2) {
                return {
                    payload: {
                        name1,
                        name2,
                    }
                }
            }
        }
    }
});

export const { addPlayer } = playerSlice.actions;
export const selectAllPlayers = (state) => state.player;
export default playerSlice.reducer;
