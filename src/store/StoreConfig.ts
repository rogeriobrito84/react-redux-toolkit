import {configureStore } from "@reduxjs/toolkit";
import NumberReducer, { NumberState} from "./number/NumberSlice";

export const store =  configureStore({
    reducer: {
        number: NumberReducer
    }
});

export type AppDispatch = typeof store.dispatch;

export type AppState = ReturnType<typeof store.getState>;