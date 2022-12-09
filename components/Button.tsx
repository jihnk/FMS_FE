import React from "react";
import { ReactNode } from "react";
const Login = ({
  onClick,
  children,
}: {
  children: ReactNode;
  onClick?: () => void;
}) => (
  <button
    onClick={onClick}
    className="bg-green-600 text-white rounded p-1"
    type="submit"
  >
    {children}
  </button>
);

export default Login;
