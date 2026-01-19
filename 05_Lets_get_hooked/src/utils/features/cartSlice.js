import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.value.push(action.payload);
    },
    removeFromCart: (state) => {
      state.value.pop();
    },
    clearCart: (state) => {
      state.value.length === 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
