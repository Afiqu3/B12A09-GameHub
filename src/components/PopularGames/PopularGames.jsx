// import axios from "axios";
// import React, { useEffect, useState } from "react";
import { useGames } from "../../Hooks/useGame";
import FilterGames from "./FilterGames";

const PopularGames = () => {
  const { games, loading } = useGames();
  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  return (
    <div className="bg-black py-15 h-full">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-2">
          <h2 className="text-white md:text-4xl text-2xl font-bold">
            Popular Games
          </h2>
        </div>
        <div className="h-px bg-[#9f62f2] w-30 mx-auto"></div>
        <FilterGames games={games}></FilterGames>
      </div>
    </div>
  );
};

export default PopularGames;
