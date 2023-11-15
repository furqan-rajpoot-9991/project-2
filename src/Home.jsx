import React from "react";
import Home2 from "./home2";

const Home = () => {
  return (
    <>
      <div className="main">
        <div className="cards   bg-gray-00 w-1/2 px-5 shadow-2xl shadow-slate-500 m-auto ">
          <div className="card1">
            <h1 className="font-semibold text-2xl pt-3">About me </h1>
            <p className="border-b-2 border-gray-400 py-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit,
              tempore? Vel maxime expedita maiores atque corporis quo ex nihil
              ab deleniti consectetur vitae explicabo consequatur
              exercitationem, mollitia numquam beatae facilis eius quam pariatur
              ?
            </p>
          </div>
          <div className="card2">
            <h1 className="font-semibold font-sans text-2xl py-5 ">
              Personal info
            </h1>
            <ul className="grid grid-cols-2 grid-rows-3 gap-3 pb-5   ">
              <li>Address: 300A lahore</li>
              <li>Main language: Urdu</li>
              <li>Email: Ahamdkhan121@gmail.com</li>
              <li>Second language: English</li>
              <li>Phone: 123 4345 54322</li>
              <li>Third language: Punjabi</li>
            </ul>
          </div>
        </div>
        <Home2 />



























        {/* <div className="bg-gray-50 shadow-2xl w-1/2 m-auto mt-5 ">

<div className="card1 px-10">
  <h1 className='py-2'>EXPERIENCE</h1>
  <p className='bg-green-400 w-40 text-sm'>JAN 2020 - MARCH 2021</p>

  <div className=" w-1/2 ">
    <h1>Web development</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quidem impedit facilis eum error velit repudiandae dolorem repellendus nihil sit?</p>
  </div>

</div>
</div> */}
      </div>
    </>
  );
};

export default Home;
