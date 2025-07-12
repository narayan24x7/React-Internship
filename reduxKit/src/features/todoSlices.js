import { createSlice, nanoid } from "@reduxjs/toolkit";

let initialState = {
    todos: [{
        id: 1,
        text: "First Todo"
    }]
}

const todoSlice = createSlice({
    name: '',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            let todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        deleteTodo: (state, action) => {
            state.todos.filter((todo) => todo.id
                !== action.payload)

        }
    }
})