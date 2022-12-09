import React, { ReactNode, useState, useEffect } from "react";
import ReactDOM from "react-dom";

interface Type {
  children: ReactNode;
  selector?: string;
  backgroundClick?: () => void;
}

const Portal = ({ children, selector = "_modal" }: Type) => {
  const [element, setElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setElement(document.getElementById(selector));
  }, []);

  if (!element) {
    return <></>;
  }

  return ReactDOM.createPortal(
    <div className="bg-black bg-opacity-30 absolute z-50 top-0 w-full h-screen flex justify-center items-center">
      <div className="bg-white w-[90%] rounded p-2">{children}</div>
    </div>,
    element
  );
};

export default Portal;
