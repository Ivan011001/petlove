"use client";

import HeaderWrapper from "../_components/header-wrapper";

import { Hearts } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <Hearts
        height="80"
        width="80"
        color="#F6B83D"
        ariaLabel="hearts-loading"
        visible={true}
      />
    </div>
  );
};

export default Loading;
