import { useEffect, useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";
import { board } from "./Api";
import { createBoard } from "./Api";

function App() {
  const [boards, setBoards] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [createBoards, setCreateBoards] = useState("");
  const [img, setimg] = useState(
    "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/140x93/a83ff322a5d3091e20e94cab796115a9/photo-1704616950334-38157594e3c9.jpg"
  );

  useEffect(() => {
    const f = async () => {
      const board_ = await board();
      setBoards(board_);
    };
    f();
  }, [boards]);

  function submit(e) {
    e.preventDefault();
    createBoard(createBoards);
    setIsClicked((pre) => !pre);
  }
  function displayCreate() {
    setIsClicked((pre) => !pre);
  }
  function onchange(e) {
    setCreateBoards(e.target.value);
  }

  return (
    <>
      <Header
        onchange={onchange}
        submit={submit}
        createBoards={createBoards}
        displayCreate={displayCreate}
        isClicked={isClicked}
      />
      <div className="body d-flex">
        <SideBar />
        <div className="boards d-flex m-3 ">
          {boards.map((e) => {
            return (
              <div
                className="bod mx-2 my-1 py-1 px-2"
                key={e.id}
                style={{
                  backgroundImage: `url(${img})`,
                }}
              >
                {e.name}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
