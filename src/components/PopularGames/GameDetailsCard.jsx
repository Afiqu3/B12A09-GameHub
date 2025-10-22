import React from "react";
import starImg from "../../assets/star.png";
import "./DetailsCardBtn.css";
import { Link } from "react-router";

const GameDetailsCard = ({ game }) => {
  //   console.log(game);
  const {
    title,
    coverPhoto,
    category,
    downloadLink,
    description,
    ratings,
    developer,
  } = game;
  return (
    <div>
      <div className="flex lg:flex-row flex-col gap-4 bg-black p-4">
        <title>{title}</title>
        <figure className="flex items-center justify-center">
          <img className="w-80 h-80 object-cover" src={coverPhoto} alt="" />
        </figure>
        <div className="flex-1 p-4 rounded space-y-2">
          <h1 className="text-3xl font-semibold">{title}</h1>
          <p className="">
            Developed by <span className="text-[#892CDC]">{developer}</span>
          </p>
          <p className="text-white/50">{description}</p>
          <div className="flex gap-6">
            <button className="btn btn-xs rounded">{category}</button>
            <button className="btn btn-xs rounded">
              <img src={starImg} alt="" />
              {ratings}
            </button>
          </div>
          <Link
            to={downloadLink}
            className={`btn mt-2 flashy-glitter bg-[#00d390] text-white rounded shadow-md drop-shadow-2`}
          >
            Install Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GameDetailsCard;
