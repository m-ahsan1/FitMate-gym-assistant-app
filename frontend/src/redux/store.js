import { configureStore } from "@reduxjs/toolkit";
import applicationReducer from "./slices/ApplicationSlice";

export const store = configureStore({
  reducer: {
    applications: applicationReducer,
  },
});
