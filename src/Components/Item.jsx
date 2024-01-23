import React, { useEffect, useState } from "react";
import { getitems } from "../Api";
import { createItems, deleteItem, checkItem } from "../Api";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useDispatch, useSelector } from "react-redux";
import {
  getCheckItems,
  createNewItem,
  deleteCheckItem,
  checkBox,
} from "../Features/checkItemSlice";

const Item = ({ id, cardid }) => {
  const dispatch = useDispatch();
  const item = useSelector((state) => state.checkItem.data);
  const [isadd, setIsAdd] = useState(false);
  const [itemName, setItemName] = useState("");

  useEffect(() => {
    getitems(id).then((res) => dispatch(getCheckItems({ id, res })));
  }, []);
  function handlechange(itemId) {
    let c;
    item.map((e) => {
      if (e.id === id) {
        e.item.map((e) => {
          if (e.id === itemId) {
            if (e.state === "complete") {
              c = "incomplete";
            } else {
              c = "complete";
            }
          }
        });
      }
    });
    dispatch(checkBox({ id, itemId }));

    checkItem(cardid, itemId, c);
  }
  function onChangeItemName(e) {
    setItemName(e.target.value);
  }
  function onsubmit() {
    createItems(id, itemName).then((res) =>
      dispatch(createNewItem({ id, res }))
    );
    setItemName("");
  }
  function onDelete(itemId) {
    var t = item;

    deleteItem(id, itemId).then((res) =>
      dispatch(deleteCheckItem({ id, itemId }))
    );
  }

  return (
    <div>
      {item.map((e) => {
        if (e.id === id) {
          return e.item.map((e) => {
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
          });
        }
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
