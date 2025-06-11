import MovieSuggestions from "./MovieSuggestions";
import SearchBar from "./SearchBar";
import { LOGIN_URL } from "../utlis/Constants";

const Search = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={LOGIN_URL} alt="Bg-image" />
      </div>
      <SearchBar />
      <MovieSuggestions />
    </div>
  );
};

export default Search;
