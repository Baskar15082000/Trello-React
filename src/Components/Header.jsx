import React from "react";
import Create from "./Create";
import { createBoard } from "../Api";
const Header = ({
  submit,
  onchange,
  createBoards,
  displayCreate,
  isClicked,
}) => {
  return (
    <div className="header d-flex align-items-center">
      <img
        className="icon ms-4"
        src="https://trello.com/assets/87e1af770a49ce8e84e3.gif"
        alt=""
      />
      <button className="button ms-5 " onClick={displayCreate}>
        Create
      </button>
      {isClicked && (
        <Create
          onchange={onchange}
          submit={submit}
          createBoards={createBoards}
        />
      )}

      <div className="profile me-4">BR</div>
    </div>
  );
};

export default Header;
