import React from "react";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const Navigate = useNavigate();
  return (
    <div className="sidebar  ">
      <button
        className="board-btn ms-3 border-0 mt-5 pt-5 px-2 "
        onClick={() => Navigate("/")}
      >
        Board
      </button>
    </div>
  );
};

export default SideBar;
