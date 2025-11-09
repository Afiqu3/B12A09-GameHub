import React from "react";
import GameCard from "../PopularGames/GameCard";
import { motion } from "motion/react";

const Games = ({ games }) => {
  return (
    <motion.div
      className="mt-10 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 p-4 lg:p-0"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ amount: 0.1 }}
      transition={{ duration: 0.5 }}
    >
      {games.map((game, index) => (
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
          viewport={{ amount: 0.3 }}
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

export default Games;
