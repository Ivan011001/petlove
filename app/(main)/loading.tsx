"use client";

import { Hearts } from "react-loader-spinner";

const Loading = () => {
  return (
    <Hearts
      height="80"
      width="80"
      color="#F6B83D"
      ariaLabel="hearts-loading"
      visible={true}
      wrapperStyle={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "60vh",
        margin: "0 auto",
      }}
    />
  );
};

export default Loading;
