import React, { ReactNode } from "react";

const Home = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      {children}
    </main>
  );
};

export default Home;
