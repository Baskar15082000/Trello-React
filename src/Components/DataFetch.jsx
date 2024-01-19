import { Cases } from "@mui/icons-material";
import React, { useEffect, useReducer } from "react";
import { getCheckList } from "../Api";
import LibraryAddCheckOutlinedIcon from "@mui/icons-material/LibraryAddCheckOutlined";

const DataFetch = ({ id, deleteChecklist }) => {
  const initialState = {
    post: [],
    error: "",
  };

  const reduce = (state, action) => {
    switch (action.type) {
      case "Fetch_Success":
        return {
          post: action.payload,
          error: "",
        };
      case "Error":
        return {
          post: "",
          error: "error",
        };
      default:
        return state;
    }
  };

  const [data, dispatch] = useReducer(reduce, initialState);
  useEffect(() => {
    getCheckList(id)
      .then((res) => dispatch({ type: "Fetch_Success", payload: res }))
      .catch(() => {
        dispatch({ type: "Error", payload: "" });
      });
  }, []);

  return (
    <div>
      <div className="cardbox mt-4 pe-5">
        {data.post.map((e) => {
          return (
            <div className="mb-3 " key={e.id}>
              <div className="d-flex justify-content-between">
                <div>
                  <LibraryAddCheckOutlinedIcon />

                  {e.name}
                </div>

                <button
                  className=" border-0 ms-5"
                  onClick={() => deleteChecklist(e.id)}
                >
                  delete
                </button>
              </div>
              {/* <Item id={e.id} cardid={id} /> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DataFetch;
