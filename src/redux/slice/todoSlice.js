import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: {
      allTodos: [],
      urgents: [],
      complited: [],
    },
  },
  reducers: {
    saveAllTodos: (state, action) => {
      // save all the payload as value
      state.todos = action.payload;
    },
    saveNewTodo: (state, action) => {
      if (action.payload.urgency == 4 || action.payload.urgency == 5) {
        state.todos = {
          allTodos: [...state.todos.allTodos, action.payload],
          urgents: [...state.todos.urgents, action.payload],
          complited: [...state.todos.complited],
        };
      } else {
        state.todos = {
          allTodos: [...state.todos.allTodos, action.payload],
          urgents: [...state.todos.urgents],
          complited: [...state.todos.complited],
        };
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { saveAllTodos, saveNewTodo, testBTN } = todoSlice.actions;

export default todoSlice.reducer;
