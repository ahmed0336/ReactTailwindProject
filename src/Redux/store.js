import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "./TodoSlice/TodoReducer";


export const store=configureStore({
    reducer:TodoReducer
})