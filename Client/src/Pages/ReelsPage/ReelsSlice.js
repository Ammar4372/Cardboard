import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getReels = createAsyncThunk(
  "Reels/getProducts",
  async (thunkapi) => {
    const res = await fetch("/reels").then((res) =>
      res.json()
    );
    return res;
  }
);

export const getReelById = createAsyncThunk(
  "Reels/getProductById",
  async (id, thunkapi) => {
    const res = await fetch(`/reels/${id}`).then((res) =>
      res.json()
    );
    return res;
  }
);

export const getReelWeights = createAsyncThunk(
  "Reels/getWeightsBySize",
  async (detail, thunkapi) => {
    const res = await fetch(
      `/details-reels-data/${detail.type}/${detail.size}`
    ).then((res) => res.json());
    return res.weight;
  }
);

const ReelsSlice = createSlice({
  name: "Reels",
  initialState: {
    Config: {
      item: {},
      size: "",
      pricePerPiece: 0,
      totalPrice: 0,
      quantity: 0,
      weights: [],
      selectedWeight: {},
    },
    Reels: [],
    ReelById: {},
    Images: [], // Adding Images state here
  },

  reducers: {
    setReel(state, action) {
      state.Config.item = action.payload;
    },
    setReelQuantity(state, action) {
      state.Config.quantity = Number.parseInt(action.payload);
    },
    setReelSize(state, action) {
      state.Config.size = action.payload;
    },
    setWeight(state, action) {
      state.Config.selectedWeight = action.payload;
    },
    setReelPrice(state, action) {
      state.Config.totalPrice = action.payload.price;
      state.Config.pricePerPiece = action.payload.pricePerPiece;
    },
    resetReelConfig(state, action) {
      state.Config = {
        item: "",
        selectedWeight: "",
        pricePerPiece: 0,
        totalPrice: 0,
        size: "",
        quantity: 0,
      };
    },
    setImages(state, action) {
      state.Images = action.payload; // Action to update Images state
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getReels.fulfilled, (state, action) => {
      state.Reels = action.payload;
    });
    builder.addCase(getReelById.fulfilled, (state, action) => {
      state.ReelById = action.payload;
    });
    builder.addCase(getReelWeights.fulfilled, (state, action) => {
      state.Config.weights = action.payload;
    });
  },
});

export const selectReelConfig = (state) => {
  return state.ReelsSlice.Config;
};
export const selectReels = (state) => {
  return state.ReelsSlice.Reels;
};
export const selectReelById = (state) => {
  return state.ReelsSlice.ReelById;
};
export const selectImages = (state) => { // Selector for Images state
  return state.ReelsSlice.Images;
};

export const {
  setReel,
  setReelSize,
  setWeight,
  setReelPrice,
  resetReelConfig,
  setReelQuantity,
  setImages, // Expose setImages action
} = ReelsSlice.actions;
export default ReelsSlice.reducer;
