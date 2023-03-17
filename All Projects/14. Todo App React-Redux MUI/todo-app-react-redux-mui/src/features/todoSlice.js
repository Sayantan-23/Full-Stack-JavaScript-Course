import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList:[]
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: initialState.todoList.length,
        text: action.payload
      }

      state.todoList.push(todo)
    },
    updateTodo: (state, action) => {
      
    },
    deleteTodo: (state, action) => {
      state.todoList = state.todoList.filter((element) => element.id !== action.payload)
    },
    deleteAllTodo: (state) => state.todoList = []
  },
});
