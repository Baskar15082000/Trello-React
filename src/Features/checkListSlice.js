import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const checklistSlice = createSlice({
  name: "checkList",
  initialState,
  reducers: {
    getChecklists: (state, action) => {
      var notPresent = true;
      state.data.map((e) => {
        if (e.id === action.payload.id) {
          notPresent = false;
        }
      });
      if (notPresent) {
        console.log(action.payload, action.payload.id);
        return {
          ...state,
          data: [
            ...state.data,
            { id: action.payload.id, checklist: action.payload.res },
          ],
        };
      }
    },
    creatNewchecklist: (state, action) => {
      state.data.map((e) => {
        if (e.id === action.payload.id) {
          e.checklist = [...e.checklist, action.payload.res];
        }
      });
    },
    deleteAchecklist: (state, action) => {
      state.data.map((e) => {
        if (e.id === action.payload.id) {
          e.checklist = e.checklist.filter(
            (e) => e.id !== action.payload.listId
          );
        }
      });
    },
  },
});
export const { getChecklists, creatNewchecklist, deleteAchecklist } =
  checklistSlice.actions;
export default checklistSlice.reducer;
