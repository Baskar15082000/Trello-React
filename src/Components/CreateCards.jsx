import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { getCheckList } from "../Api";
import { useEffect } from "react";
import LibraryAddCheckOutlinedIcon from "@mui/icons-material/LibraryAddCheckOutlined";
import { createCheckList, deleteCheckList } from "../Api";
import Item from "./Item";

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
  const [checklist, setCheckList] = useState([]);
  const [checklistName, setCheckListName] = useState("");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [displaAdd, setDisplayAdd] = useState(false);

  useEffect(() => {
    getCheckList(id).then((res) => setCheckList(res));
  }, []);

  function onchange(e) {
    setCheckListName(e.target.value);
    console.log(checklistName);
  }
  function onsubmit() {
    createCheckList(checklistName, id).then((res) =>
      setCheckList((pre) => [...pre, res])
    );
  }
  function deleteChecklist(listId) {
    deleteCheckList(id, listId).then((res) => setCheckList(res));
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
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <h3>{title}</h3>
          </Typography>
          <div className="checklist d-flex ">
            <div className="cardbox mt-4 pe-5">
              {checklist.map((e) => {
                return (
                  <div className="mb-3 " key={e.id}>
                    <LibraryAddCheckOutlinedIcon />

                    {e.name}
                    <button
                      className="border-0 ms-5 "
                      onClick={() => deleteChecklist(e.id)}
                    >
                      delete
                    </button>
                    <Item id={e.id} />
                  </div>
                );
              })}
            </div>
            <div className="ms-4  mt-3 ">
              <div className="d-flex flex-column  ">
                <div>Add to card</div>
                <div className="d-flex mt-3 mb-2">
                  <LibraryAddCheckOutlinedIcon />
                  <div
                    className="ms-3"
                    style={{ cursor: "pointer" }}
                    onClick={() => setDisplayAdd((pre) => !pre)}
                  >
                    Checklist
                  </div>
                </div>
              </div>
              <div>
                {displaAdd && (
                  <div>
                    <div className="d-flex flex-column">
                      <input
                        type="text"
                        onChange={onchange}
                        value={checklistName}
                        placeholder="checklist"
                      />
                      <div className="d-flex my-2 px-3 bg-info rounded align-items-center justify-content-between">
                        <button
                          className="border-0 text-danger bg-transparent  py-0"
                          style={{ fontSize: "1.2rem" }}
                          onClick={() => setDisplayAdd((pre) => !pre)}
                        >
                          x
                        </button>
                        <div onClick={onsubmit} style={{ cursor: "pointer" }}>
                          Add
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
