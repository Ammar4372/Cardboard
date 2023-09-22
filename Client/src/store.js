import { configureStore } from "@reduxjs/toolkit";
import CardBoardSlice from "./Pages/CardBoardPage/CardBoardSlice";
import CartSlice from "./Pages/ShoppingCart/CartSlice";
import CheckoutSlice from "./Pages/Checkout/CheckoutSlice";

const store = configureStore({
  reducer: {
    CardBoardSlice,
    CartSlice,
    CheckoutSlice,
  },
});

export default store;
