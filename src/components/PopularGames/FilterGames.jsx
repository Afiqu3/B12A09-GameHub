import React, { useEffect, useState } from "react";
import GameCard from "./GameCard";

const FilterGames = ({ games }) => {
  const [filterGames, setFilterGames] = useState([]);
  useEffect(() => {
    const newData = [...games].sort((a, b) => b.ratings - a.ratings);
    // console.log("inside filter games", newData);
    setFilterGames(newData);
  }, [games]);
  return (
    <div className="mt-10 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 p-4 lg:p-0">
      {filterGames.slice(0, 4).map((game) => (
        <GameCard key={game.id} game={game}></GameCard>
      ))}
    </div>
  );
};

export default FilterGames;
