"use client";

import { Hearts } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-[50vh]">
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
