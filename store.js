import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./slicer/navSlice"


export const store = configureStore({
    reducer: {
        nav: navReducer,
    },
})
