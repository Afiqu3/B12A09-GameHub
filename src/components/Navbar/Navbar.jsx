import React, { useContext, useEffect, useState } from "react";
import Links from "./Links";
import { IoIosMenu } from "react-icons/io";
import { TbXboxXFilled } from "react-icons/tb";
import { Link, NavLink, useNavigate } from "react-router";
import "./links.css";
import logoImg from "../../assets/logo.png";
import { AuthContext } from "../../Contexts/AuthContext/AuthContext";
import { FiLogOut } from "react-icons/fi";
import { Bounce, toast } from "react-toastify";

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
    path: "/login",
    id: 4,
  },
];

const privateNavigationData = [
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
];

const Navbar = () => {
const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user, signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const links = navigationData.map((nav) => (
    <Links key={nav.id} nav={nav}></Links>
  ));
  const privateLinks = privateNavigationData.map((nav) => (
    <Links key={nav.id} nav={nav}></Links>
  ));

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

  const handleLogOut = () => {
    signOutUser()
      .then(() => {
        toast.success("Logout Successfully!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
      })
      .catch(() => {
        // console.log(error);
      });
  };

  return (
    <div
      className={`sticky top-0 z-50 transition-all duration-1000 ${
        scrolled ? "bg-black/70 shadow-md backdrop-blur" : "bg-transparent"
      }`}
    >
      {/* <div className="absolute inset-0 bg-black/50"></div> */}
      <nav
        className={`flex justify-between items-center pt-7 max-w-6xl lg:mx-auto mx-4 md:py-7 ${
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
            <Link to={`/`} className="flex items-center gap-x-1 text-white">
              <img className="h-12 w-12" src={logoImg} alt="" />
              GameHub
            </Link>
          </h3>
        </div>

        {!user && (
          <div className="lg:block hidden">
            <ul className="lg:flex hidden gap-x-8 font-medium">{links}</ul>
          </div>
        )}
        {user && (
          <div className="flex gap-6 items-center">
            <div className="lg:block hidden">
              <ul className="lg:flex hidden gap-x-8 font-medium">
                {privateLinks}
              </ul>
            </div>
            <div onClick={() => navigate('/profile')} className="cursor-pointer">
              <img className="w-12 rounded-full" src={user.photoURL} alt="" />
            </div>
            <button
              onClick={handleLogOut}
              className="hidden group lg:flex items-center gap-2 bg-linear-to-r from-[#52057B] to-[#892CDC] text-white font-semibold px-6 py-2 rounded-full shadow-md transition-all duration-300 ease-in-out transform focus:ring-2 focus:ring-[#892CDC] focus:outline-none cursor-pointer"
            >
              <FiLogOut className="text-white text-lg transition-transform duration-300 group-hover:-translate-x-1" />
              <span>Logout</span>
            </button>
          </div>
        )}
      </nav>
      {isOpen && !user && (
        <div className="lg:hidden mt-2 mb-5 ml-10 space-y-3 max-w-45 relative h-40">
          <ul className={`space-y-3 animation`}>{links}</ul>
        </div>
      )}
      {isOpen && user && (
        <div className="lg:hidden mt-2 mb-5 ml-10 space-y-3 max-w-45 relative h-35">
          <ul className={`space-y-3 animation`}>{privateLinks}</ul>
          <button
              onClick={handleLogOut}
              className="animation lg:hidden group flex items-center gap-2 bg-linear-to-r from-[#52057B] to-[#892CDC] text-white font-semibold px-6 py-2 rounded-full shadow-md transition-all duration-300 ease-in-out transform focus:ring-2 focus:ring-[#892CDC] focus:outline-none cursor-pointer"
            >
              <FiLogOut className="text-white text-lg transition-transform duration-300 group-hover:-translate-x-1" />
              <span>Logout</span>
            </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
