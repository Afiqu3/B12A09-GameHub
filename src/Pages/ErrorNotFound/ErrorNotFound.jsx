import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import NotFound from "../../components/NotFound/NotFound";
import Footer from "../../components/Footer/Footer";


const ErrorNotFound = () => {
  return (
    <div className="bg-linear-to-br from-gray-900 via-black to-gray-900">
      <Navbar></Navbar>
      <NotFound></NotFound>
      <Footer></Footer>
    </div>
  );
};

export default ErrorNotFound;
