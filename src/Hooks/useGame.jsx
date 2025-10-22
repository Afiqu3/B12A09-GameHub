import axios from "axios";
import { useEffect, useState } from "react";

export const useGames = () => {
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState();
  useEffect(() => {
    setLoading(true);
    axios("/gamesData.json").then((data) => {
      setGames(data.data);
    });
    setLoading(false)
  }, []);
  return {games, loading, setLoading};
}