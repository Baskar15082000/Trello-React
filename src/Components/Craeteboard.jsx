import React from "react";
import { useNavigate } from "react-router-dom";

const Createboard = ({ e, img }) => {
  const Navigate = useNavigate();
  return (
    <div
      className="bod mx-2 my-1 py-1 px-2"
      key={e.id}
      style={{
        backgroundImage: `url(${img})`,
      }}
      onClick={() => Navigate("/boards/" + e.id)}
    >
      {e.name}
    </div>
  );
};

export default Createboard;
