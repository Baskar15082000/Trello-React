import React, { useEffect, useState } from "react";
import { getitems } from "../Api";
import { createItems, deleteItem } from "../Api";

const Item = ({ id }) => {
  const [item, setItem] = useState([]);
  const [i, seti] = useState("");
  const [isadd, setIsAdd] = useState(false);
  const [itemName, setItemName] = useState("");
  useEffect(() => {
    getitems(id).then((res) => setItem(res));
  }, []);
  function handlechange(e) {
    var itemId = e.target.id;
    if (e.target.checked) {
      seti(itemId);
    } else {
      console.log("else");
      seti("");
    }
  }
  function onChangeItemName(e) {
    setItemName(e.target.value);
  }
  function onsubmit() {
    createItems(id, itemName).then((res) => setItem((pre) => [...pre, res]));
    setItemName("");
  }
  function onDelete(itemId) {
    var t = item;
    var c = [];
    deleteItem(id, itemId).then((res) => {
      console.log(res);
      if (res == 200) {
        t.map((e) => {
          if (e.id !== itemId) {
            c.push(e);
          }
        });
        setItem(c);
      }
    });
  }

  return (
    <div>
      {item.map((e) => {
        return (
          <div className="d-flex m-1 aligh-items-center " key={e.id}>
            <div>
              {" "}
              <span>
                <input
                  id={e.id}
                  type="checkbox"
                  //checked={e.state === "complete" ? true : false}
                  onChange={handlechange}
                />
              </span>
              <span
                style={{
                  textDecoration: i === e.id ? "line-through" : "none",
                }}
                className="me-5"
              >
                {e.name}
              </span>
            </div>

            <button
              className="border-0 ms-5  py-0 bg-white text-danger"
              onClick={() => onDelete(e.id)}
            >
              x
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
