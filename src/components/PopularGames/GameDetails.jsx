import React, { useEffect, useState } from "react";
import { useGames } from "../../Hooks/useGame";
import { useParams } from "react-router";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import GameDetailsCard from "./GameDetailsCard";

const GameDetails = () => {
  const { games } = useGames();
  const [game, setGame] = useState({});
  const { id } = useParams();
  // console.log(games);
  useEffect(() => {
    if (!games) return;
    const newGame = games.find((g) => g.id === id);
    setGame(newGame);;
  }, [id, games]);

  if (!game) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  return (
    <div className="relative container lg:mx-auto w-full overflow-hidden text-white lg:my-25">
      {/* <div className="absolute inset-0 bg-black/50"></div> */}
      <GameDetailsCard game={game}></GameDetailsCard>
    </div>
  );
};

export default GameDetails;
