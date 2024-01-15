import React, { useEffect, useState } from "react";
import { getList } from "../Api";
import { useParams } from "react-router-dom";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SideBar from "./SideBar";
import { addList } from "../Api";
import { deleteList } from "../Api";

const Lists = () => {
  const [isclicked, setIsClicked] = useState(true);
  const [listname, setListname] = useState("");
  const { id } = useParams();
  const [lists, setLists] = useState([]);
  const [ispopup, setIsPopup] = useState(false);

  useEffect(() => {
    const list = async () => {
      const l = await getList(id);
      setLists(l);
    };
    list();
  }, [lists]);

  function addListbtn() {
    setIsClicked((pre) => !pre);
  }
  function onchange(e) {
    setListname(e.target.value);
    console.log(listname);
  }
  function add() {
    addList(listname, id);
    setListname("");
  }
  function ondelete() {}
  return (
    <div className="lists d-flex ">
      <SideBar />
      <div className="flex1 d-flex">
        {lists.map((e) => {
          return (
            <div className="list d-flex flex-column   m-2 px-3 py-1" key={e.id}>
              <div className="heading d-flex justify-content-between mb-2">
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
                      onClick={() => deleteList(e.id)}
                    >
                      Archive this list
                    </div>
                  )}
                </div>
              </div>
              <div className="add">+ Add a card</div>
            </div>
          );
        })}
        <div className="btns m-2 ms-4 h-25">
          <button className="buttns_btns border-0" onClick={addListbtn}>
            Add another list
          </button>
          {isclicked && (
            <div>
              <input
                type="text"
                value={listname}
                onChange={onchange}
                placeholder="enter list name"
              />

              <button onClick={add}>add</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Lists;
