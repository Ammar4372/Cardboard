import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "Cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart(state, action) {
      state.items.push(action.payload);
    },
    incrementItemQuantity(state, action) {
      state.items.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            quantity: (item.quantity += 1),
          };
        }
      });
    },
    decrementItemQuantity(state, action) {
      state.items.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            quantity: (item.quantity -= 1),
          };
        }
      });
    },
    removeItem(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});
export const selectCartItems = (state) => {
  return state.CartSlice.items;
};
export const {
  addToCart,
  incrementItemQuantity,
  decrementItemQuantity,
  removeItem,
} = cartSlice.actions;
export default cartSlice.reducer;
