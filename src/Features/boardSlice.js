import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};
const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    getBoard: (state, action) => {
      return { ...state, data: action.payload };
    },
    createNewBoard: (state, action) => {
      return { ...state, data: [...state.data, action.payload] };
    },
  },
});
export const { getBoard, createNewBoard } = boardSlice.actions;
export default boardSlice.reducer;
