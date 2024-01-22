import { configureStore } from "@reduxjs/toolkit";
import boardReducer from "../Features/boardSlice.js";
import listReducer from "../Features/listSlice.js";
const store = configureStore({
  reducer: {
    board: boardReducer,
    list: listReducer,
  },
});
const unSubcribe = store.subscribe(() =>
  console.log("update", store.getState())
);

unSubcribe();

export default store;
