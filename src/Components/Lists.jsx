import React, { useEffect, useState } from "react";
import { getList } from "../Api";
import { useParams } from "react-router-dom";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SideBar from "./SideBar";
import { addList } from "../Api";
import { deleteList } from "../Api";
import CardList from "./CardList";

const Lists = () => {
  const [isclicked, setIsClicked] = useState(true);
  const [listname, setListname] = useState("");
  const { id } = useParams();
  const [lists, setLists] = useState([]);
  const [ispopup, setIsPopup] = useState(false);

  useEffect(() => {
    getList(id).then((res) => setLists(res));

    console.log("p");
  }, []);

  function addListbtn() {
    setIsClicked((pre) => !pre);
  }
  function onchange(e) {
    setListname(e.target.value);
    console.log(listname);
  }
  function add() {
    addList(listname, id).then((res) => setLists((pre) => [...pre, res]));
    setListname("");
  }

  function ondelete(id) {
    var t = lists;
    var c = [];
    deleteList(id).then((res) => {
      t.map((e) => {
        if (e.id !== res.id) {
          c.push(e);
        }
      });
      setLists(c);
    });
  }
  return (
    <div className="lists d-flex  ">
      <SideBar />
      <div className="flex1 d-flex mt-5  pt-5  ">
        {lists.map((e) => {
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
                    <div className="delete p-1" onClick={() => ondelete(e.id)}>
                      Archive this list
                    </div>
                  )}
                </div>
              </div>
              <CardList id={e.id} />
            </div>
          );
        })}
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
      </div>
    </div>
  );
};

export default Lists;
