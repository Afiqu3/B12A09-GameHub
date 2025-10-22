import React from "react";
import Navbar from "../components/Navbar/Navbar";
import bgImg from "../assets/hero.jpg";

const RootLayout = () => {
  return (
    <div className="bg-black min-h-screen">
      <header
        style={{ backgroundImage: `url(${bgImg})` }}
        className="bg-cover bg-center min-h-screen"
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <Navbar></Navbar>
      </header>
    </div>
  );
};

export default RootLayout;
