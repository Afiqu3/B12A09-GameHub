import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import GameCard from "./GameCard";

const FilterGames = ({ games }) => {
  const [filterGames, setFilterGames] = useState([]);

  useEffect(() => {
    const newData = [...games].sort((a, b) => b.ratings - a.ratings);
    setFilterGames(newData);
  }, [games]);

  return (
    <motion.div
      className="mt-10 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 p-4 lg:p-0"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      {filterGames.slice(0, 4).map((game, index) => (
        <motion.div
          key={game.id}
          initial={{
            opacity: 0,
            y: 30,
            scale: 0.9,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.6,
            delay: index * 0.1,
            ease: "easeOut",
          }}
        >
          <GameCard game={game} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default FilterGames;
