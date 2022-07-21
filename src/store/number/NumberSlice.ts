import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "../StoreConfig";

export type NumberState = {
    min: number;
    max: number;
}

const initialState: NumberState = {
    min: 0,
    max: 10
}

export const NumberSlice = createSlice({
    name: "number",
    initialState,
    reducers: {
        setMin: (state, action: PayloadAction<number>) => {
            state.min = action.payload;
        },
        setMax: (state, action: PayloadAction<number>) => {
            state.max = action.payload;
        }
    }
});

export const { setMin, setMax } = NumberSlice.actions;

export const SelectNumber = (state: AppState) => state.number;

export default NumberSlice.reducer;