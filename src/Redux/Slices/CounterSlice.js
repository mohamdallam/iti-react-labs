import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counterNumber",
  initialState: {
    num: 0,
  },

  reducers: {
    increment: (state) => {
      state.num += 1;
    },

    decrement: (state) => {
      state.num -= 1;
    },
  },
});

export default counterSlice.reducer;
export const { increment, decrement } = counterSlice.actions;
