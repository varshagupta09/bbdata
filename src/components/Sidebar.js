import React, { useState } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  useParams,
  Params,
} from "react-router-dom";
import Profile from "./Profile";

const Sidebar = (props) => {
  

  return (
    <div>
      <aside className="sticky sm:absolute bg-gray-600  sm:w-64 h-screen pt-10 pl-10">
        <ul className="text-white font-medium ">
          <li className="py-4 px-4">
            <Link to="/profile/1" >
              {" "}
              Amitabh Bachchan
            </Link>
          </li>
          <li className="py-4 px-4">
            <Link to="/profile/2" >Shahrukh Khan</Link>
          </li>
          <li className="py-4 px-4">
            <Link to="/profile/3">Salman Khan</Link>
          </li>
          <li className="py-4 px-4">
            <Link to="/profile/4">Aamir Khan</Link>
          </li>
          <li className="py-4 px-4">
            <Link to="/profile/5">Akshay Kumar</Link>
          </li>
          <li className="py-4 px-4">
            <Link to="/profile/6">Hrithik Roshan</Link>
          </li>
          <li className="py-4 px-4">
            <Link to="/profile/7">Ranbir Kapoor</Link>
          </li>
          <li className="py-4 px-4">
            <Link to="/profile/8">Ranveer Singh</Link>
          </li>
          <li className="py-4 px-4">
            <Link to="/profile/9">Ajay Devgn</Link>
          </li>
          <li className="py-4 px-4">
            <Link to="/profile/10">Sidharth Malhotra</Link>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
