import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useState } from "react";
import { YOUTUBE_SEARCH_API } from "./Constant";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showsuggestion, setShowsuggestion] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const setTimeoutref = useRef();

  useEffect(() => {
    window.addEventListener("scroll", hadndleScroll);
    return () => {
      window.removeEventListener("scroll", hadndleScroll);
    };
  }, []);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
  };

  function hadndleScroll(e) {
    setIsScrolling(true);
  }

  useEffect(() => {
    // console.log(searchQuery);
    const timer = setTimeout(() => getSearchsug(), 300);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchsug = async () => {
    // console.log(searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestion(json[1]);
    // console.log(json);
    // console.log(json[1]);
  };

  const dispatch = useDispatch();
  const toggleMenuhandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuhandler()}
          className="h-11 px-2 pb-2  cursor-pointer "
          alt="Menu"
          src="https://paragondigital.com/wp-content/uploads/Menu-Icon2.jpg"
        />
        <a href="/">
          <img
            className="h-8"
            alt="youtube-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
          />
        </a>
      </div>
      <div className="col-span-10 px-10">
        <input
          type="text"
          className="w-1/2 p-2 border border-gray-400 rounded-l-full"
          value={searchQuery}
          onChange={handleInputChange}
          onFocus={() => setShowsuggestion(true)}
          onBlur={() => setShowsuggestion(false)}
        ></input>
        <button className="border p-2 border-gray-400 rounded-r-full bg-gray-50">
          search
        </button>
        <div
          className="fixed bg-white py-2 px-5 w-[26rem] rounded-lg border border-gray-100"
          style={{ display: isScrolling ? "none" : "block" }}
        >
          <ul>
            {showsuggestion &&
              searchQuery &&
              suggestion.map((s, index) => (
                <li key={index} className=" py-2 shadow-sm hover:bg-gray-100">
                  😀 {s}
                </li>
              ))}
          </ul>
        </div>
      </div>

      <div className="col-span-1 ">
        <img
          className="h-8 "
          alt="user-icon"
          src="https://t3.ftcdn.net/jpg/05/17/79/88/360_F_517798849_WuXhHTpg2djTbfNf0FQAjzFEoluHpnct.jpg"
        />
      </div>
    </div>
  );
};

export default Header;
