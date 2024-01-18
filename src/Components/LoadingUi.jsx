import React from "react";
import Skeleton from "@mui/material/Skeleton";

const LoadingUi = () => {
  return (
    <div>
      <div className="d-flex ">
        <Skeleton
          className="m-4"
          variant="rectangular"
          width={210}
          height={118}
        />
        <Skeleton
          className="m-4"
          variant="rectangular"
          width={210}
          height={118}
        />
        <Skeleton
          className="m-4"
          variant="rectangular"
          width={210}
          height={118}
        />
      </div>

      <Skeleton animation="wave" />
    </div>
  );
};

export default LoadingUi;
