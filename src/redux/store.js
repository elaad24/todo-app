import { configureStore } from "@reduxjs/toolkit";
import ToDoReducer from "./todoSlice";

export const store = configureStore({
  todoReducer: ToDoReducer,
});
