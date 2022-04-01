import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    token: "",
    refreshToken: "",
    username: "",
    email: "",
    password: "",
  },
  reducers: {
    setToken: (state, action) => {
      return {
        ...state,
        token: action.payload,
      };
    },

    setRefreshToken: (state, action) => {
      return {
        ...state,
        refreshToken: action.payload,
      };
    },

    setUser: (state, action) => {
      return {
        ...state,
        username: action.payload.username,
        email: action.payload.email,
        password: action.payload.password,
      };
    },
  },
});

export const { setToken, setRefreshToken, setUser } = loginSlice.actions;
export const selectLogin = (state: any) => state;
export default loginSlice.reducer;
