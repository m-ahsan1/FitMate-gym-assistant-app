import { createSlice } from "@reduxjs/toolkit";

export const applicationSlice = createSlice({
  name: "application",
  initialState: [],
  reducers: {
    setApplication: (state, action) => action.payload,
    addApplication: (state, action) => [...state, action.payload],
    deleleApplication: (state, action) => {
      state.filter((app) => app.id !== action.payload);
    },

    //update
  },
});

export const { setApplication, addApplication, deleleApplication } =
  applicationSlice.actions;
export default applicationSlice.reducer;
