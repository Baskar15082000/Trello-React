import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    getCard: (state, action) => {
      var notPresent = true;
      state.data.map((e) => {
        if (e.id === action.payload.id) {
          notPresent = false;
        }
      });
      if (notPresent) {
        return {
          ...state,
          data: [
            ...state.data,
            { id: action.payload.id, card: action.payload.res },
          ],
        };
      }
    },
    creatNewcard: (state, action) => {
      state.data.map((e) => {
        if (e.id === action.payload.id) {
          e.card = [...e.card, action.payload.res];
        }
      });
    },
    deleteAcard: (state, action) => {
      state.data.map((e) => {
        if (e.id === action.payload.listId) {
          e.card = e.card.filter((e) => e.id !== action.payload.id);
        }
      });
    },
  },
});
export const { getCard, creatNewcard, deleteAcard } = cardSlice.actions;
export default cardSlice.reducer;
