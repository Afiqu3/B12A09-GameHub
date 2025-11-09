import React from "react";
import Games from "./Games";
import { useGames } from "../../Hooks/useGame";
import { motion } from "motion/react";

const AllGames = () => {
  const { games, loading } = useGames();
  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  return (
    <div className="bg-linear-to-br from-gray-900 via-black to-gray-900 py-15">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center space-y-2"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-white md:text-4xl text-2xl font-bold">
            All Games
          </h2>
          <div className="h-px bg-[#9f62f2] w-30 mx-auto"></div>
        </motion.div>    
        <Games games={games}></Games>
      </div>
    </div>
  );
};

export default AllGames;
