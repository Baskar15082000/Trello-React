import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    getLists: (state, action) => {
      return { data: action.payload };
    },
    createNewList: (state, action) => {
      return { ...state, data: [...state.data, action.payload] };
    },
    deleteAList: (state, action) => {
      const lists = state.data.filter((e) => e.id !== action.payload.id);
      return {
        ...state,
        data: lists,
      };
    },
  },
});
export const { getLists, createNewList, deleteAList } = listSlice.actions;
export default listSlice.reducer;
