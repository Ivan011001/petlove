import React from "react";

const PageContainer: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <div className="pt-[30px] md:pt-[53px] lg:pt-16">{children}</div>;
};

export default PageContainer;
