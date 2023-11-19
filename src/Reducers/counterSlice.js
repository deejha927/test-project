import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: { value: [], count: 0 },
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state, action) => {
            if (state.count !== 0) {
                state.count -= 1;
            }
        },
        test: (state, action) => {
            console.log(action.payload);
            state.value = [...state.value, action.payload];


        }
    }
});

export const { increment, decrement, test } = counterSlice.actions;
export default counterSlice.reducer;