import React, { useContext } from "react";
import Navbar from "../components/Navbar/Navbar";
import bgImg from "../assets/hero.jpg";
import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";
import { AuthContext } from "../Contexts/AuthContext/AuthContext";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";

const RootLayout = () => {
  const { loading } = useContext(AuthContext);

  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
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
