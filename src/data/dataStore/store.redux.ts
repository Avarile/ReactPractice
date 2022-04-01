import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "@DATA/login.redux";

export default configureStore({
  reducer: {
    login: loginReducer,
  },
});
