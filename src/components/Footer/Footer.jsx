import React from "react";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";
import logoImg from "../../assets/logo.png";
import { Link } from "react-router";
import { motion } from "motion/react";

const Footer = () => {
  const bottomLinks = [
    {
      Icon: FaFacebookF,
      label: "Facebook",
      href: "https://www.facebook.com/afique.hossain.J/",
    },
    { Icon: FaGithub, label: "GitHub", href: "https://github.com/Afiqu3" },
    { Icon: FaInstagram, label: "Instagram", href: "#" },
    {
      Icon: FaLinkedin,
      label: "LinkedIn",
      href: "www.linkedin.com/in/md-afique-hossain",
    },
  ];
  const gameList = [
    ["Minecraft", "#apps"],
    ["PUBG", "#installation"],
    ["Call of Duty", "#changelog"],
    ["Clash of Clans", "#status"],
  ];
  const company = [
    ["Home", "#contact"],
    ["About", "#about"],
    ["Register", "#careers"],
    ["Login", "#press"],
  ];
  const resources = [
    ["Docs", "#docs"],
    ["Guides", "#guides"],
    ["Community", "#community"],
    ["Support", "#support"],
  ];
  return (
    <footer className="bg-[#0a1a2f] text-gray-300 border-t border-white/5">
      <div className="max-w-6xl mx-auto lg:px-0 px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <motion.div
            className="col-span-1 lg:col-span-2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl flex items-center justify-center">
                <img className="h-9 w-9" src={logoImg} alt="logo" />
              </div>
              <div>
                <h3 className="text-white text-lg font-semibold">GameHub</h3>
                <p className="text-xs text-gray-400">A Game Library</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-300/90 leading-6">
              An engaging online library for discovering and supporting game
              developers. Users can browse indie games, see detailed
              information.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {bottomLinks.map(({ Icon, label, href }) => (
                <Link
                  to={href}
                  target="_blank"
                  key={label}
                  aria-label={label}
                  className="group p-2 rounded-lg ring-1 ring-white/10 hover:ring-white/40 hover:-translate-y-0.5 transition bg-white/5 cursor-pointer"
                >
                  <Icon className="w-4 h-4 text-gray-300 group-hover:text-white"></Icon>
                </Link>
              ))}
            </div>

            <div className="mt-6 text-sm text-gray-400 flex items-start gap-2">
              <FaMapMarkerAlt className="w-4 h-4 mt-0.5 text-gray-400" />
              <p>Global • Remote-first</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-white font-semibold mb-3">Trending Games</h4>
            <ul className="space-y-2 text-sm">
              {gameList.map(([label]) => (
                <li key={label}>
                  <a className="hover:text-white transition cursor-pointer">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}>
            <h4 className="text-white font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-sm">
              {company.map(([label]) => (
                <li key={label}>
                  <a className="hover:text-white transition cursor-pointer">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}>
            <h4 className="text-white font-semibold mb-3">Resources</h4>
            <ul className="space-y-2 text-sm mb-5">
              {resources.map(([label]) => (
                <li key={label}>
                  <a className="hover:text-white transition cursor-pointer">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="my-8 border border-white/10" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} GameHub — All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm">
            <a href="#privacy" className="hover:text-white transition">
              Privacy
            </a>
            <a href="#terms" className="hover:text-white transition">
              Terms
            </a>
            <a href="#cookies" className="hover:text-white transition">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
