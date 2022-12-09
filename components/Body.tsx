import React, { ReactNode } from "react";

const Body = ({ children }: { children: ReactNode }) => {
  return <div className="flex-1 overflow-y-scroll">{children}</div>;
};

export default Body;
