import React from "react";

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({ onClick, children, disabled, type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400"
    >
      {children}
    </button>
  );
};

export default Button;
