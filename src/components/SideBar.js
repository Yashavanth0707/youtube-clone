import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  //early return
  //if(!isMenuOpen) return null;

  return !isMenuOpen ? null : (
    <div className="p-5 shadow-2xl w-44">
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <li>Shorts</li>
        <li>Vedios</li>
        <li>Live</li>
      </ul>
      <h1 className="font-bold pt-5">Subscription</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold pt-5">watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default SideBar;
