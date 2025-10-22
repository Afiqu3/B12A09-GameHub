import React from "react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#393E46] text-white px-6 text-center">
      <h1 className="text-[8rem] font-extrabold text-[#00ADB5] leading-none">404</h1>
      <h2 className="text-3xl font-semibold mb-4">Oops! Page Not Found</h2>
      <p className="text-gray-300 mb-8 max-w-md">
        The page you’re looking for doesn’t exist or has been moved.  
        Please check the URL or go back to the homepage.
      </p>
      <Link
        to="/"
        className="bg-[#00ADB5] hover:bg-[#00cfd6] text-white font-medium px-8 py-3 rounded-full transition-all duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
