import React, { useEffect, useState } from "react";
import Links from "./Links";
import { IoIosMenu } from "react-icons/io";
import { TbXboxXFilled } from "react-icons/tb";
import { Link } from "react-router";
import "./links.css";
import logoImg from '../../assets/logo.png'

const navigationData = [
  {
    name: "Home",
    path: "/",
    id: 1,
  },
  {
    name: "About",
    path: "/about",
    id: 2,
  },
  {
    name: "Register",
    path: "/register",
    id: 3,
  },
  {
    name: "Login",
    path: "/installation",
    id: 4,
  },
];

const Navbar = () => {
  const links = navigationData.map((nav) => (
    <Links key={nav.id} nav={nav}></Links>
  ));
  const [isOpen, setIsOpen] = useState(false);
  // scroll handle
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className={`sticky top-0 z-50 transition-all duration-1000 ${
        scrolled ? "bg-black/70 shadow-md backdrop-blur" : "bg-transparent"
      }`}>
      <nav
        className={`flex justify-between items-center pt-7 container lg:mx-auto mx-4 md:py-7 ${
          !isOpen ? "pb-7" : ""
        }`}
      >
        <div className="flex items-center gap-x-3">
          {isOpen ? (
            <TbXboxXFilled
              className="text-4xl text-white lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
            ></TbXboxXFilled>
          ) : (
            <IoIosMenu
              className="text-4xl text-white lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
            ></IoIosMenu>
          )}
          <h3 className="text-xl font-extrabold">
            <Link
              to={`/`}
              className="flex items-center gap-x-1 bg-linear-to-r from-[#632ee3] to-[#9f62f2] bg-clip-text text-transparent"
            >
              <img className="h-12 w-12" src={logoImg} alt="" />
              GameHub
            </Link>
          </h3>
        </div>


        <div className="lg:block hidden">
        <ul className="lg:flex hidden gap-x-8 font-medium">{links}</ul>
        </div>
      </nav>
      {isOpen && (
        <div className="lg:hidden mt-2 mb-5 ml-10 space-y-3 max-w-45 relative h-40">
          <ul className={`space-y-3 animation`}>{links}</ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;