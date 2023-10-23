import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./Slices/CounterSlice";
import TodoSlice from "./Slices/TodoSlice";


const store = configureStore({
  reducer: {
    counterNumber: counterSlice,
    todos: TodoSlice,

  },
});

export default store;
