import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todoActions",
  initialState,
  reducers: {
    saveAllTodos: (state, action) => {
      state.todos = [...action.payload];
    },
    saveNewTodo: (state, action) => {
      state.todos = [...state, action.payload];
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id != action.payload.id);
    },
  },
});

// Action creators are generated for each case reducer function
export const { saveAllTodos, saveNewTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
