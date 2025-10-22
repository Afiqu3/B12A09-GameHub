import React from "react";
import Navbar from "../components/Navbar/Navbar";
import bgImg from "../assets/hero.jpg";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bgImg})` }}
      className="bg-cover bg-center min-h-screen"
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default RootLayout;
