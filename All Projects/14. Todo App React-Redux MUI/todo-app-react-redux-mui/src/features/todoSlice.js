import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const storedList = localStorage.getItem("lists") !== null ? JSON.parse(localStorage.getItem("lists")) : []

const initialState = {
  todoList: storedList,
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
    updateTodo: (state, action) => {
      let data = action.payload;
      state.todoList.map((element) => {
        if (element.id === data.id) {
          element.text = data.text;
        }
      });
    },
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

export const {
  addTodo,
  updateTodo,
  deleteTodo,
  deleteAllTodo,
} = todoSlice.actions;

export default todoSlice.reducer;
