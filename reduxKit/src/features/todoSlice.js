import { createSlice, nanoid } from "@reduxjs/toolkit";

let initialState = {
  todos: [
    {
      id: 1,
      text: "First Todo",
      completed: false,
    }
  ]
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      let todo = {
        id: nanoid(),
        text: action.payload,
        completed: false,
      };
      state.todos.push(todo);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleComplete: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    editTodo: (state, action) => {
      const { id, newText } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.text = newText;
      }
    }
  }
});

export const { addTodo, deleteTodo, toggleComplete, editTodo } = todoSlice.actions;

export default todoSlice.reducer;
