import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home2 from "./home2";
function App() {
  return (
 

    <>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home2 />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
