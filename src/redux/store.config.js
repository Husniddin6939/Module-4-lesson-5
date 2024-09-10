import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todo"


export const Store=configureStore({
    reducer:{
        todo: todoSlice
    }
})