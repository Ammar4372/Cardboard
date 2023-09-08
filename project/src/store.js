import { configureStore } from "@reduxjs/toolkit";
import CardBoardSlice from "./Pages/CardBoardPage/CardBoardSlice";

const store = configureStore({
  reducer: {
    CardBoardSlice,
  },
});

export default store;
