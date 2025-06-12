import { useSelector } from "react-redux";
import { lang } from "../utlis/languageConstants";
import { useRef } from "react";
import OpenAi from "../utlis/OpenAi";

const SearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const handleSearchClick = async () => {
    console.log(searchText.current.value);

    const gptQuery =
      "Act as a Movie Recommendation System and suggest some movies for the query" +
      searchText.current.value +
      "only give me names of 5 movies , comma seperated like the example result given ahead. Example Result: Gadar, Laal Singh Chadha, Sholey, Golmaal, Phir Hera Pheri";

    const res = await OpenAi.chat.completions.create({
      messages: [{ role: "user", content: searchText.current.value }],
      model: "gpt-3.5-turbo",
    });
    console.log(res.choices?.[0]?.message?.content.split(","));

    const gptMovies = res.choices?.[0]?.message?.content.split(",");
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 bg-white col-span-9"
          placeholder={lang[langKey].searchPlaceholder}
        />
        <button
          className="cursor-pointer col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
