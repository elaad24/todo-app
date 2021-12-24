import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
  },
  reducers: {
    saveAllTodos: (state, action) => {
      // save all the payload as value
      state.todos = action.payload;
    },
    saveNewTodo: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id != action.payload.id);
    },
  },
});

// Action creators are generated for each case reducer function
export const { saveAllTodos, saveNewTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
