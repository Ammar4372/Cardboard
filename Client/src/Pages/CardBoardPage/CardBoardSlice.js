import { createSlice } from "@reduxjs/toolkit";

const CardBoard = createSlice({
  name: "CardBoard",
  initialState: {
    config: {
      material: "",
      thickness: 0,
      printedSides: 0,
      quantity: 0,
      dimension: {
        length: 0,
        depth: 0,
        width: 0,
      },
    },
  },
  reducers: {
    setMaterial(state, action) {
      state.config.material = action.payload;
    },
    setThickness(state, action) {
      state.config.thickness = action.payload;
    },
    setPrintedSides(state, action) {
      state.config.printedSides = action.payload;
    },
    setDimension(state, action) {
      state.config.dimension = action.payload;
    },
    setLength(state, action) {
      state.config.dimension.length = action.payload;
    },
    setDepth(state, action) {
      state.config.dimension.depth = action.payload;
    },
    setWidth(state, action) {
      state.config.dimension.width = action.payload;
    },
    setQuantity(state, action) {
      state.config.quantity = action.payload;
    },
  },
});
export const selectConfig = (state) => {
  return state.CardBoardSlice.config;
};
export const {
  setMaterial,
  setDepth,
  setLength,
  setThickness,
  setDimension,
  setPrintedSides,
  setWidth,
  setQuantity
} = CardBoard.actions;
export default CardBoard.reducer;
