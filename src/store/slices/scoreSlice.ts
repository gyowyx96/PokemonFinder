import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

const scoreSlice = createSlice({
    name: "score",
    initialState: 0,
    reducers: {
        increment: (state) => state +1
    },
});

export const { increment } = scoreSlice.actions;
export const selectScore = (state: RootState) => state.score
export default scoreSlice.reducer;