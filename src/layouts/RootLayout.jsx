import React from "react";
import Navbar from "../components/Navbar/Navbar";
import bgImg from "../assets/hero.jpg";
import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";

const RootLayout = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bgImg})` }}
      className="bg-cover bg-center"
    >
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
