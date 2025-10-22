import React from "react";
import { useNavigate } from "react-router";

const GameCard = ({ game }) => {
  const { coverPhoto, title, id } = game;
  const navigate = useNavigate();
  return (
    <div
      className="relative group [clip-path:polygon(10%_0,75%_0,100%_0,100%_70%,100%_100%,0_100%,0_80%,0_10%,7%_0)] bg-base-100 shadow-sm cursor-pointer overflow-hidden"
      onClick={() => navigate(`/gameDetails/${id}`)}
    >
      <figure>
        <img
          className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
          src={coverPhoto}
          alt={title}
        />
      </figure>

      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out flex justify-center items-end pb-6">
        <h3 className="text-white text-2xl font-semibold transform scale-90 group-hover:scale-100 transition-transform duration-300">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default GameCard;
