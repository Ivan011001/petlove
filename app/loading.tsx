"use client";
import Loader from "@/components/loader";

const Loading = () => {
  return (
    <div className="bg-white absolute z-100 w-screen h-screen">
      <div className="flex h-full items-center justify-center">
        <Loader />
      </div>
    </div>
  );
};

export default Loading;
