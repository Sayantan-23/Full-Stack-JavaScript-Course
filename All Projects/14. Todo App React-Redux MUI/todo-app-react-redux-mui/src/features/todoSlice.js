import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };

      state.todoList.push(todo);
    },
    // updateTodo: (state, id, action) => {
    //   const todo = state.todoList.find((element) => element.id === id);
    //   todo.text = action.payload;
    // },
    deleteTodo: (state, action) => {
      state.todoList = state.todoList.filter(
        (element) => element.id !== action.payload
      );
    },
    deleteAllTodo: (state) => {
      state.todoList = [];
    },
  },
});

export const { addTodo, updateTodo, deleteTodo, deleteAllTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
