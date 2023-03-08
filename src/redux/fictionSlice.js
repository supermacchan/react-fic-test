import { createSlice } from "@reduxjs/toolkit";

const optionsState = {
    macchan: 0,
    alex: 0,
    mitya: 0,
    eri: 0,
    nika: 0,
    taguchi: 0,
    dacchi: 0,
    aru: 0,
    holtz: 0,
    sweetlost: 0,
    ama: 0,
    kim: 0,
    tina: 0,
    yasha: 0,
    korin: 0,
    mother: 0
};

const fictionSlice = createSlice({
    name: "options",
    initialState: optionsState,
    reducers: {
        pointToMacchan(state, action) {
            state.macchan = (state.macchan + 1);
        }
    }
})

export const { pointToMacchan } = fictionSlice.actions;
export const fictionReducer = fictionSlice.reducer;

