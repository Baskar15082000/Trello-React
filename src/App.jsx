import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";
import { board } from "./Api";
import { createBoard } from "./Api";
import { Routes, Route, NavLink } from "react-router-dom";
import Createboard from "./Components/Craeteboard";
import Lists from "./Components/Lists";
import { useDispatch, useSelector } from "react-redux";

import LoadingUi from "./Components/LoadingUi";
import { getBoard, createNewBoard } from "./Features/boardSlice";

function App() {
  const dispatch = useDispatch();
  const boards = useSelector((state) => state.board.data);

  const [isClicked, setIsClicked] = useState(false);
  const [createBoards, setCreateBoards] = useState("");
  const [s, sets] = useState(true);
  const [error, setError] = useState(Boolean);

  const img =
    "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/140x93/a83ff322a5d3091e20e94cab796115a9/photo-1704616950334-38157594e3c9.jpg";

  useEffect(() => {
    board().then((res) => {
      if (res === "error") {
        console.log(res);
        setError(true);
      } else {
        dispatch(getBoard(res));

        setError(false);
      }
    });

    sets(false);
  }, []);

  function submit(e) {
    e.preventDefault();
    createBoard(createBoards).then((res) => dispatch(createNewBoard(res)));

    setIsClicked((pre) => !pre);
    setCreateBoards("");
    sets(e.target.value);
  }
  function displayCreate() {
    setIsClicked((pre) => !pre);
  }
  function onchange(e) {
    setCreateBoards(e.target.value);
  }

  return (
    <>
      <NavLink style={{ textDecoration: "none" }}>
        <Header
          onchange={onchange}
          submit={submit}
          createBoards={createBoards}
          displayCreate={displayCreate}
          isClicked={isClicked}
        />
      </NavLink>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="body d-flex">
                <SideBar />

                <div className="boards d-flex   py-5">
                  {error ? (
                    <div className="board h-50 d-flex py-5">
                      <div>
                        <h3>Request Failed Boards Not Fetched ...</h3>
                      </div>
                    </div>
                  ) : boards < 1 ? (
                    <LoadingUi />
                  ) : (
                    boards.map((e) => {
                      return <Createboard key={e.id} e={e} img={img} />;
                    })
                  )}
                </div>
              </div>
            </>
          }
        />
        <Route path="boards/:id" element={<Lists />} />
      </Routes>
    </>
  );
}

export default App;
