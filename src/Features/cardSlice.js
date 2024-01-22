import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    getCard: (state, action) => {
      var f = true;
      state.data.map((e) => {
        if (e.id === action.payload.id) {
          f = false;
        }
      });
      if (f) {
        state.data.push({ id: action.payload.id, card: action.payload.res });
      }
    },
    creatNewcard: (state, action) => {
      state.data.map((e) => {
        if (e.id === action.payload.id) {
          e.card.push(action.payload.res);
        }
      });
    },
    deleteAcard: (state, action) => {
      state.data.map((e) => {
        if (e.id === action.payload.listId) {
          const d = e.card.filter((e) => e.id !== action.payload.id);
          e.card = d;
        }
      });
    },
  },
});
export const { getCard, creatNewcard, deleteAcard } = cardSlice.actions;
export default cardSlice.reducer;
