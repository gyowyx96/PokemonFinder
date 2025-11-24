import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { Time } from "../../utils/configVariable";

const timerSlice = createSlice({
  name: "time",
  initialState: {
    Time,
    isRunning: true,
  },
  reducers: {
  decrement: (state) => {
      if (state.isRunning) {
        state.Time -= 1;
      }
    },
    pause: (state) => {
      state.isRunning = false;
    },
    resume: (state) => {
      state.isRunning = true;
    },
  },
});

export const { decrement, pause, resume} = timerSlice.actions;
export const selectTimer = (state: RootState) => state.timer.Time
export const selectRunning = (state: RootState) => state.timer.isRunning;

export default timerSlice.reducer;