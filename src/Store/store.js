import { configureStore } from "@reduxjs/toolkit";
import boardReducer from "../Features/boardSlice.js";
import listReducer from "../Features/listSlice.js";
import cardReducer from "../Features/cardSlice.js";
const store = configureStore({
  reducer: {
    board: boardReducer,
    list: listReducer,
    card: cardReducer,
  },
});
const unSubcribe = store.subscribe(() =>
  console.log("update", store.getState())
);

unSubcribe();

export default store;
