import React, { useEffect, useState } from "react";
import { getitems } from "../Api";

const Item = ({ id }) => {
  const [item, setItem] = useState([]);
  useEffect(() => {
    getitems(id).then((res) => setItem(res));
  }, []);
  return (
    <div>
      {item.map((e) => {
        return (
          <div key={e.id}>
            <span>
              <input
                type="checkbox"
                checked={e.state === "complete" ? true : false}
              />
            </span>
            {e.name}
          </div>
        );
      })}
    </div>
  );
};

export default Item;
