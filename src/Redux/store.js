import { configureStore } from "@reduxjs/toolkit";

import counterSlice from "./Slices/CounterSlice";


const store = configureStore({
  reducer: {
    counterNumber: counterSlice,
  },
});

export default store;
