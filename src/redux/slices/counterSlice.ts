import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ICounterState {
  counterState: number;
}

const initialState: ICounterState = {
  counterState: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increase: (state, action: PayloadAction<number>) => {
      state.counterState += action.payload;
    },
  },
});

export const { increase } = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
