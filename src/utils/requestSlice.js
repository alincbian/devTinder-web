import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
  name: "request",
  initialState: null,
  reducers: {
    addrequest: (state, action) => action.payload,
    removerequest: (state, action) => null,
  },
});

export const { addrequest, removerequest } = requestSlice.actions;

export default requestSlice.reducer;
