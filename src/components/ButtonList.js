import React from "react";
import Button from "./Button";

const list = ["All", "Gaming", "Music", "Live", "Shorts", "Trending", "Movies"];

const ButtonList = () => {
  return (
    <div className="flex space-x-24">
      {list.map((name, index) => {
        return <Button nam={name} key={index} />;
      })}
    </div>
  );
};

export default ButtonList;
