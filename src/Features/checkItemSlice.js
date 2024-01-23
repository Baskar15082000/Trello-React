import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};
const checkItemSlice = createSlice({
  name: "checkItem",
  initialState,
  reducers: {
    getCheckItems: (state, action) => {
      var isPresent = true;
      state.data.map((e) => {
        if (e.id === action.payload.id) {
          isPresent = !isPresent;
        }
      });
      if (isPresent) {
        return {
          ...state,
          data: [
            ...state.data,
            { id: action.payload.id, item: action.payload.res },
          ],
        };
      }
    },
    createNewItem: (state, action) => {
      state.data.map((e) => {
        if (e.id === action.payload.id) {
          e.item = [...e.item, action.payload.res];
        }
      });
    },
    deleteCheckItem: (state, action) => {
      state.data.map((e) => {
        if (e.id === action.payload.id) {
          e.item = e.item.filter((e) => e.id !== action.payload.itemId);
        }
      });
    },
    checkBox: (state, action) => {
      state.data.map((e) => {
        if (e.id === action.payload.id) {
          e.item.map((e) => {
            if (e.id === action.payload.itemId) {
              if (e.state === "complete") {
                e.state = "incomplete";
              } else {
                e.state = "complete";
              }
            }
          });
        }
      });
    },
  },
});
export const { getCheckItems, checkBox, deleteCheckItem, createNewItem } =
  checkItemSlice.actions;
export default checkItemSlice.reducer;
