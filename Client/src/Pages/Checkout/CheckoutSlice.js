import { createSlice } from "@reduxjs/toolkit";

const CheckoutSlice = createSlice({
  name: "Checkout",
  initialState: {
    client: {
      name: "",
      email: "",
      company: "",
      phone: "",
    },
    shipping: {
      address: "",
      city: "",
      state: "",
      zip: null,
    },
    payment: {
      cardNumber: null,
      cardName: "",
      expDate: "",
    },
  },
  reducers: {
    setClientName(state, action) {
      state.client.name = action.payload;
    },
    setClientEmail(state, action) {
      state.client.email = action.payload;
    },
    setClientCompany(state, action) {
      state.client.company = action.payload;
    },
    setShippingAddress(state, action) {
      state.shipping.address = action.payload;
    },
    setShippingCity(state, action) {
      state.shipping.city = action.payload;
    },
    setShippingState(state, action) {
      state.shipping.state = action.payload;
    },
    setZip(state, action) {
      state.shipping.zip = action.payload;
    },
    setPhone(state, action) {
      state.client.phone = action.payload;
    },
    setCardNumber(state, action) {
      state.payment.cardNumber = action.payload;
    },
    setCardName(state, action) {
      state.payment.cardName = action.payload;
    },
    setExpDate(state, action) {
      state.payment.expDate = action.payload;
    },
  },
});
export const selectCheckout = (state) => {
  return state.CheckoutSlice;
};
export const {
  setClientName,
  setClientEmail,
  setClientCompany,
  setShippingAddress,
  setShippingCity,
  setShippingState,
  setPhone,
  setZip,
  setExpDate,
  setCardName,
  setCardNumber,
} = CheckoutSlice.actions;
export default CheckoutSlice.reducer;
