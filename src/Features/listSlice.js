import { createSlice } from "@reduxjs/toolkit";

initialState = {
  data: [],
};
const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    getLists: (action) => {
      return { data: action.payload };
    },
  },
});
export const { getLists } = listSlice.actions;
export default listSlice.reducer;
