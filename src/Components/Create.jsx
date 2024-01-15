import React from "react";

const Create = ({ submit, createBoards, onchange }) => {
  return (
    <div>
      <form action="" className="inputbox ms-5" onSubmit={submit}>
        <input
          type="text"
          value={createBoards}
          onChange={onchange}
          placeholder="enter board name"
        />
      </form>
    </div>
  );
};

export default Create;
