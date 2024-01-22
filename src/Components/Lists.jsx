import React, { useEffect, useState } from "react";
import { getList } from "../Api";
import { useParams } from "react-router-dom";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SideBar from "./SideBar";
import { addList } from "../Api";
import { deleteList } from "../Api";
import CardList from "./CardList";
import LoadingUi from "./LoadingUi";
import { useDispatch, useSelector } from "react-redux";
import { getLists, createNewList, deleteAList } from "../Features/listSlice";

const Lists = () => {
  const dispatch = useDispatch();
  const [isclicked, setIsClicked] = useState(true);
  const [listname, setListname] = useState("");
  const { id } = useParams();
  const list = useSelector((state) => state.list.data);

  const [ispopup, setIsPopup] = useState(false);
  const [error, setError] = useState(Boolean);

  useEffect(() => {
    getList(id).then((res) => {
      if (res === "error") {
        setError(true);
      } else {
        dispatch(getLists(res));
        setError(false);
      }
    });
  }, []);

  function addListbtn() {
    setIsClicked((pre) => !pre);
  }
  function onchange(e) {
    setListname(e.target.value);
  }
  function add() {
    addList(listname, id).then((res) => dispatch(createNewList(res)));
    setListname("");
  }

  function ondelete(id) {
    deleteList(id).then((res) => dispatch(deleteAList(res)));
  }
  return (
    <div className="lists d-flex  ">
      <SideBar />
      <div className="flex1 d-flex">
        {error ? (
          <div>Request Failed List Not Fetched ...</div>
        ) : list.length < 1 ? (
          <LoadingUi />
        ) : (
          list.map((e) => {
           
            return (
              <div
                className="list d-flex flex-column  m-2 px-3 py-1 bg-light "
                key={e.id}
              >
                <div className="heading d-flex justify-content-between px-1 mb-2">
                  <div className="listname ">{e.name}</div>
                  <div className="threedot">
                    <MoreHorizIcon
                      onClick={() =>
                        setIsPopup((pre) => {
                          if (pre === e.id) {
                            return !pre;
                          } else {
                            return e.id;
                          }
                        })
                      }
                    />

                    {ispopup === e.id && (
                      <div
                        className="delete p-1"
                        onClick={() => ondelete(e.id)}
                      >
                        Archive this list
                      </div>
                    )}
                  </div>
                </div>
                <CardList id={e.id} />
              </div>
            );
          })
        )}
        {!error && (
          <div className="addlistbtnss mt-2 ms-2  py-2  px-2 bg-light ">
            <button className="buttns_btns border-0" onClick={addListbtn}>
              + Add another list
            </button>
            {isclicked && (
              <div>
                <input
                  className="inputlist w-75"
                  type="text"
                  value={listname}
                  onChange={onchange}
                  placeholder="enter list name"
                />

                <button className="listadd border-0 m-1" onClick={add}>
                  add
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Lists;
