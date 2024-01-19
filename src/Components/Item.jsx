import React, { useEffect, useReducer, useState } from "react";
import { getitems } from "../Api";
import { createItems, deleteItem, checkItem } from "../Api";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { reduce } from "./DataFetch";

const Item = ({ id, cardid }) => {
  const initialState = {
    post: [],
    error: "",
  };
  const [item, dispatch] = useReducer(reduce, initialState);

  const [isadd, setIsAdd] = useState(false);
  const [itemName, setItemName] = useState("");

  useEffect(() => {
    getitems(id).then((res) =>
      dispatch({
        type: "Fetch_Success",
        payload: res,
        error: "",
      })
    );
  }, []);
  function handlechange(id) {
    let c;
    var t = [];
    item.post.map((e) => {
      if (id === e.id) {
        if (e.state === "complete") {
          e.state = "incomplete";
          c = e.state;
        } else {
          e.state = "complete";
          c = e.state;
        }
      }
      t.push(e);
    });
    dispatch({ type: "Check", payload: t });

    checkItem(cardid, id, c);
  }
  function onChangeItemName(e) {
    setItemName(e.target.value);
  }
  function onsubmit() {
    createItems(id, itemName).then((res) =>
      dispatch({ type: "Add", payload: res })
    );
    setItemName("");
  }
  function onDelete(itemId) {
    var t = item.post;

    deleteItem(id, itemId).then((res) => {
      console.log(res);

      t = t.filter((e) => itemId != e.id);
      dispatch({ type: "Delete", payload: t });
    });
  }

  return (
    <div>
      {item.post.map((e) => {
        return (
          <div
            className="d-flex m-1 aligh-items-center justify-content-between"
            key={e.id}
          >
            <div>
              {" "}
              <span>
                <input
                  id={e.id}
                  type="checkbox"
                  checked={e.state === "complete" ? true : false}
                  onChange={() => handlechange(e.id)}
                />
              </span>
              <span
                style={{
                  textDecoration:
                    e.state === "complete" ? "line-through" : "none",
                }}
                className=""
              >
                {e.name}
              </span>
            </div>

            <button
              className="border-0  py-0 bg-white text-muted"
              onClick={() => onDelete(e.id)}
            >
              <DeleteForeverIcon />
            </button>
          </div>
        );
      })}
      <div>
        <div
          className="mt-2"
          onClick={() => setIsAdd((pre) => !pre)}
          style={{ cursor: "pointer" }}
        >
          Add an item
        </div>
        {isadd && (
          <div className="m-1">
            <input
              type="text"
              value={itemName}
              onChange={onChangeItemName}
              placeholder="add item"
            />
            <div className="d-flex justify-content-between py-1 px-3">
              <span
                className="text-danger"
                onClick={() => setIsAdd((pre) => !pre)}
                style={{ cursor: "pointer" }}
              >
                x
              </span>{" "}
              <span onClick={onsubmit} style={{ cursor: "pointer" }}>
                add
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Item;
