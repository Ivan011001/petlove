import Image from "next/image";

import React from "react";

const Loading = () => {
  return (
    <div className="relative">
      <div
        className="w-screen h-screen left-0 top-0 absolute bg-black bg-opacity-30 bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: `url(/loading.png)` }}
      ></div>
    </div>
  );
};

export default Loading;
