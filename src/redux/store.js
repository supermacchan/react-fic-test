import { configureStore } from "@reduxjs/toolkit";
import { fictionReducer } from "./fictionSlice";

export const store = configureStore({
    reducer: fictionReducer
});