import React from "react";

interface InputProps {
  type: "text" | "number" | "color" | "email" | "password";
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  name: string;
  id?: string;  // id 속성 추가
  required?: boolean;
}

const Input: React.FC<InputProps> = ({ type, value, onChange, name, id, required }) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      id={id}  // id 속성 적용
      required={required}
      className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
};

export default Input;
