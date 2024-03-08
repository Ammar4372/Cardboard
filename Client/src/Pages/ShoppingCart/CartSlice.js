import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "Cart",
  initialState: {
    items: localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [],
    totalPrice: localStorage.getItem("totalPrice")
      ? Number(localStorage.getItem("totalPrice"))
      : 0,
  },
  reducers: {
    addToCart(state, action) {
      const duplicate = state.items.some(
        (item) => item.id === action.payload.id
      );
      const sameConfig = state.items.some(
        (item) =>
          item.printedSides === action.payload.printedSides &&
          item.thickness === action.payload.thickness &&
          item.material === action.payload.material &&
          item.dimension.length === action.payload.dimension.length &&
          item.dimension.width === action.payload.dimension.width &&
          item.dimension.depth === action.payload.dimension.depth
      );

      if (!sameConfig && !duplicate) {
        state.items.push(action.payload);
      } else if (duplicate && sameConfig) {
        state.items.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              quantity: (item.quantity += action.payload.quantity),
              price: (item.price +=
                item.pricePerPiece * action.payload.quantity),
            };
          }
        });
      } else if (duplicate && !sameConfig) {
        action.payload.id = Date.now();
        state.items.push(action.payload);
      }
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    addRollToCart(state, action) {
      const duplicate = state.items.some(
        (item) => item.id === action.payload.id
      );
      const sameConfig = state.items.some(
        (item) =>
          item.size === action.payload.size && item.name === action.payload.name
      );

      if (!sameConfig && !duplicate) {
        state.items.push(action.payload);
      } else if (duplicate && sameConfig) {
        state.items.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              quantity: (item.quantity += action.payload.quantity),
              price: (item.price +=
                item.pricePerPiece * action.payload.quantity),
            };
          }
        });
      } else if (duplicate && !sameConfig) {
        action.payload.id = Date.now();
        state.items.push(action.payload);
      }
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    addReelToCart(state, action) {
      const duplicate = state.items.some(
        (item) => item.id === action.payload.id
      );
      const sameConfig = state.items.some(
        (item) =>
          item.size === action.payload.size &&
          item.name === action.payload.name &&
          item.weight.weight_type === action.payload.weight.weight_type
      );

      if (!sameConfig && !duplicate) {
        state.items.push(action.payload);
      } else if (duplicate && sameConfig) {
        state.items.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              quantity: (item.quantity += action.payload.quantity),
              price: (item.price +=
                item.pricePerPiece * action.payload.quantity),
            };
          }
        });
      } else if (duplicate && !sameConfig) {
        action.payload.id = Date.now();
        state.items.push(action.payload);
      }
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    incrementItemQuantity(state, action) {
      state.items.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            price: (item.price = (item.quantity + 1) * item.pricePerPiece),
            quantity: (item.quantity += 1),
          };
        }
        localStorage.setItem("cart", JSON.stringify(state.items));
      });
    },
    decrementItemQuantity(state, action) {
      state.items.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            price: (item.price = (item.quantity - 1) * item.pricePerPiece),
            quantity: (item.quantity -= 1),
          };
        }
        localStorage.setItem("cart", JSON.stringify(state.items));
      });
    },
    removeItem(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    emptyCart(state, action) {
      state.items = [];
      localStorage.removeItem("totalPrice");
      localStorage.removeItem("cart");
    },
    setTotalPrice(state, action) {
      let price = 0;
      state.items.forEach((item) => (price += item.price));
      state.totalPrice = price;
      localStorage.setItem("totalPrice", state.totalPrice);
    },
  },
});
export const selectCartItems = (state) => {
  return state.CartSlice.items;
};
export const selectCartPrice = (state) => {
  return state.CartSlice.totalPrice;
};
export const {
  addToCart,
  incrementItemQuantity,
  decrementItemQuantity,
  removeItem,
  setTotalPrice,
  emptyCart,
  addRollToCart,
  addReelToCart,
} = cartSlice.actions;
export default cartSlice.reducer;
