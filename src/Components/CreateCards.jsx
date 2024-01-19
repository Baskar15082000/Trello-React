import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { getCheckList } from "../Api";
import { useEffect, useReducer } from "react";
import LibraryAddCheckOutlinedIcon from "@mui/icons-material/LibraryAddCheckOutlined";
import { createCheckList, deleteCheckList } from "../Api";
import Item from "./Item";
import { reduce } from "./DataFetch";

const style = {
  position: "absolute",
  left: "50%",
  top: "20rem",
  transform: "translate(-50%, -50%)",
  width: "40rem",
  bgcolor: "background.paper",
  boxShadow: 24,
};

export default function CreateCards({ title, id }) {
  const initialState = {
    post: [],
    error: "",
  };
  const [checklistName, setCheckListName] = useState("");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [displaAdd, setDisplayAdd] = useState(false);

  const [checklist, dispatch] = useReducer(reduce, initialState);
  function ondelete(listId) {
    deleteCheckList(id, listId).then((res) =>
      dispatch({ type: "Delete", payload: res })
    );
  }

  function onchange(e) {
    setCheckListName(e.target.value);
    console.log(checklistName);
  }
  function onsubmit() {
    createCheckList(checklistName, id).then((res) =>
      dispatch({ type: "Add", payload: res })
    );
    setCheckListName("");
  }

  return (
    <div>
      <button
        className="cdf  text-black border-0  bg-white "
        onClick={handleOpen}
      >
        {title}
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="p-3 rounded" sx={style}>
          <Typography id="modal-modal-title ">
            <div style={{ fontSize: "2rem" }}>{title}</div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
