import React from "react";

const Button = ({ nam }) => {
  return (
    <div className="flex">
      <button className="px-2 m-1 bg-gray-400 rounded-lg">{nam}</button>
    </div>
  );
};

export default Button;
