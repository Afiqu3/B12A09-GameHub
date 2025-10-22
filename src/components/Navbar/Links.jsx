import React from "react";
import { NavLink } from "react-router";
import { motion } from "motion/react";

const Links = ({ nav }) => {
  return (
    <motion.li
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <NavLink
        to={nav.path}
        className={({ isActive }) =>
          `relative inline-block text-white hover:text-[#632ee3] ${
            isActive
              ? 'font-semibold bg-linear-to-r from-[#632ee3] to-[#892CDC] bg-clip-text text-transparent border-b-2 border-[#9f62f2]'
              : ''
          }`
        }
      >
        <span>{nav.name}</span>
        <motion.div
          className="absolute bottom-0 left-0 right-0 hpx] bg-[#9f62f2]"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
        />
      </NavLink>
    </motion.li>
  );
};

export default Links;
