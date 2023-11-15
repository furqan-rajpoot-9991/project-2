import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-blue-900  py-5 flex justify-between px-20">
        <Link to="./">
          {" "}
          <h1 className="font-sans font-semibold text-2xl text-white cursor-pointer">
            My Resume
          </h1>
        </Link>
        <ul className="flex gap-5 text-white ">
          <div className="flex gap-1 hover:bg-blue-950 transition-all cursor-pointer hover:px-8  hover:rounded-2xl">
            <i className="fa-solid fa-house"> </i>

            <Link to="/">
              <li className="">Home</li>
            </Link>
          </div>

          <div className="flex  gap-1  hover:bg-blue-950 transition-all cursor-pointer hover:px-8 hover:rounded-2xl">
            <i className="fa-brands fa-stack-overflow"></i>
            <Link to="/home">
              {" "}
              <li>Skill</li>
            </Link>
          </div>
          <div className="flex  gap-1  hover:bg-blue-950 transition-all cursor-pointer hover:px-8 hover:rounded-2xl">
            <i className="fa-solid fa-star"></i>
            <li>Experiences</li>
          </div>

          <div className="flex  gap-1  hover:bg-blue-950 transition-all cursor-pointer hover:px-8 hover:rounded-2xl">
            <i className="fa-solid fa-laptop-file"></i>
            <li>Education</li>
          </div>

          <div className="flex  gap-1  hover:bg-blue-950 transition-all cursor-pointer hover:px-8 hover:rounded-2xl">
            <i className="fa-solid fa-user"></i>
            <li>Portfolio</li>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
