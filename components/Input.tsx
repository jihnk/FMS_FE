import React, { ChangeEvent } from "react";

const Input = ({
  name,
  type,
  placeholder,
  value,
  onChange,
}: {
  name: string;
  type: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}) => (
  <div className="border rounded overflow-hidden">
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="p-1 w-full outline-none"
      autoComplete="off"
    />
  </div>
);

export default Input;
