import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utlis/Constants";
import { addPopularMovies } from "../utlis/MovieSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getnowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    getnowPlayingMovies();
  }, []);
};

export default usePopularMovies;
