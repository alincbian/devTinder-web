import { createSlice } from "@reduxjs/toolkit";
import { retry } from "@reduxjs/toolkit/query";

const requestSlice = createSlice({
  name: "request",
  initialState: null,
  reducers: {
    addrequest: (state, action) => action.payload,
    removerequest: (state, action) => {
      const filterRequests = state.filter((req) => req?.id !== action.payload);
      return filterRequests;
    },
  },
});

export const { addrequest, removerequest } = requestSlice.actions;

export default requestSlice.reducer;
