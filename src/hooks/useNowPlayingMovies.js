import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utlis/Constants";
import { addNowPlayingMovies } from "../utlis/MovieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getnowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    getnowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
