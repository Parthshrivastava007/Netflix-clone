import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utlis/Constants";
import { addTopRatedMovies } from "../utlis/MovieSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const getnowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    getnowPlayingMovies();
  }, []);
};

export default useTopRatedMovies;
