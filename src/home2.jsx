import React from "react";

function Home2() {
  return (
    <>
      <div className="bg-white shadow-2xl shadow-slate-700 w-1/2 py-5 mt-5 m-auto px-5">
        <h1> PROFESSIONAL SKILLS</h1>

        <div className=" grid grid-cols-2 grid-rows-3">
          <div className="html">
            <h3 className="py-2">HTML</h3>
            <div className="w-1/2 bg-gray-600 h-1 rounded-xl">
              <div className="w-32 bg-blue-400  h-1"></div>
            </div>
          </div>

          <div className="CSS">
            <h3 className="py-2">CSS</h3>
            <div className="w-1/2 bg-gray-600 h-1 rounded-xl">
              <div className="w-16 bg-blue-400  h-1"></div>
            </div>
          </div>

          <div className="JS">
            <h3 className="py-2">JAVASCRIP</h3>
            <div className="w-1/2 bg-gray-600 h-1 rounded-xl">
              <div className="w-24 bg-blue-400  h-1"></div>
            </div>
          </div>

          <div className="PHP">
            <h3 className="py-2">PHP</h3>
            <div className="w-1/2 bg-gray-600 h-1 rounded-xl">
              <div className="w-1/2 bg-blue-400  h-1"></div>
            </div>
          </div>

          <div className="MYSQL">
            <h3 className="py-2">MYSQL</h3>
            <div className="w-1/2 bg-gray-600 h-1 rounded-xl">
              <div className="w-1/3 bg-blue-400  h-1"></div>
            </div>
          </div>

          <div className="JQUERY">
            <h3 className="py-2">JQUERY</h3>
            <div className="w-1/2 bg-gray-600 h-1 rounded-xl">
              <div className="w-1/5 bg-blue-400  h-1"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home2;
