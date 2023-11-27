import { createSlice } from "@reduxjs/toolkit";

const LoginSlice = createSlice({
  name: "Login",
  initialState: {
    Login: false,
  },
  reducers: {
    setLogin(state, action) {
      console.log(action.payload);
      state.Login = action.payload;
    },
  },
});
export const selectLogin = (state) => {
  return state.LoginSlice.Login;
};

export const { setLogin } = LoginSlice.actions;
export default LoginSlice.reducer;
