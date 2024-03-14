import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk(
  "CardBoard/getProducts",
  async (thunkApi) => {
    const res = await fetch("/cardboard").then((data) =>
      data.json()
    );

    return res;
  }
);
export const getMaterials = createAsyncThunk(
  "CardBoard/getMaterials",
  async (thunkApi) => {
    const res = await fetch("/material-details").then(
      (data) => data.json()
    );
    return res;
  }
);
export const getProductById = createAsyncThunk(
  "CardBoard/getProductById",
  async (id, thunkApi) => {
    const res = await fetch(
      `/cardboard/getItem/${id}`
    ).then((data) => data.json());

    return res;
  }
);

export const getProductsListById = createAsyncThunk(
  "CardBoard/getProductsListById",
  async (id, thunkApi) => {
    const res = await fetch(`/products-list/${id}`).then(
      (data) => data.json()
    );

    return res;
  }
);

const CardBoard = createSlice({
  name: "CardBoard",
  initialState: {
    Config: {
      item: {},
      subItem: {},
      material: {},
      thickness: "",
      printedSides: "",
      quantity: "",
      pricePerPiece: 0,
      totalPrice: 0,
      dimension: {
        length: "",
        depth: "",
        width: "",
      },
    },
    Materials: [],
    Products: [],
    Product: {},

    SubProducts: [],
  },
  reducers: {
    setMaterial(state, action) {
      state.Config.material = action.payload;
    },
    setThickness(state, action) {
      state.Config.thickness = action.payload;
    },
    setPrintedSides(state, action) {
      state.Config.printedSides = action.payload;
    },
    setDimension(state, action) {
      state.Config.dimension = JSON.parse(action.payload);
    },
    setLength(state, action) {
      state.Config.dimension.length = action.payload;
    },
    setDepth(state, action) {
      state.Config.dimension.depth = action.payload;
    },
    setWidth(state, action) {
      state.Config.dimension.width = action.payload;
    },
    setQuantity(state, action) {
      if (action.payload > 0) {
        state.Config.quantity = Number.parseInt(action.payload);
      } else {
        state.Config.quantity = 0;
      }
    },
    setProduct(state, action) {
      state.Config.item = action.payload;
    },
    setSubProduct(state, action) {
      state.Config.subItem = action.payload;
    },
    setPrice(state, action) {
      state.Config.totalPrice = action.payload.price;
      state.Config.pricePerPiece = action.payload.pricePerPiece;
    },
    resetConfig(state, action) {
      state.Config = {
        item: "",
        material: "",
        thickness: "",
        printedSides: "",
        quantity: "",
        pricePerPiece: 0,
        totalPrice: 0,
        dimension: {
          length: "",
          depth: "",
          width: "",
        },
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProductsListById.fulfilled, (state, action) => {
      state.SubProducts = action.payload;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.Products = action.payload;
    });
    builder.addCase(getProductById.fulfilled, (state, action) => {
      state.Product = action.payload;
    });
    builder.addCase(getMaterials.fulfilled, (state, action) => {
      state.Materials = action.payload;
    });
  },
});

export const selectConfig = (state) => {
  return state.CardBoardSlice.Config;
};
export const selectProducts = (state) => {
  return state.CardBoardSlice.Products;
};
export const selectProduct = (state) => {
  return state.CardBoardSlice.Product;
};
export const selectMaterials = (state) => {
  return state.CardBoardSlice.Materials;
};
export const selectSubProducts = (state) => {
  return state.CardBoardSlice.SubProducts;
};
export const {
  setMaterial,
  setDepth,
  setLength,
  setThickness,
  setDimension,
  setPrintedSides,
  setWidth,
  setQuantity,
  setProduct,
  setPrice,
  resetConfig,
  setSubProduct
} = CardBoard.actions;
export default CardBoard.reducer;
