import { signOut } from "firebase/auth";
import {
  LOGO_URL,
  PROFILE_LOGO_URL,
  SUPPORTED_LANGUAGES,
} from "../utlis/Constants";
import { auth } from "../utlis/Firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utlis/UserSlice";
import { toogleSearchView } from "../utlis/searchSlice";
import { changeLanguage } from "../utlis/ConfigSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showSearch = useSelector((store) => store.showSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch(() => {
        navigate("/error");
      });
  };

  const handleSearch = () => {
    dispatch(toogleSearchView());
  };

  const handleLangChange = (e) => {
    dispatch(changeLanguage(e.target.value));
    console.log(e.target.value);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute flex justify-between w-screen px-8 py-2 bg-gradient-to-b from-black z-10">
      <img className="w-44" src={LOGO_URL} alt="logo" />
      {user && (
        <div className="flex p-2 gap-2">
          {showSearch && (
            <select
              onChange={handleLangChange}
              className="bg-gray-900 p-2 m-2 text-white"
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.id} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <button
            className="cursor-pointer py-2 px-4 mb-2 bg-purple-800 text-white rounded-lg"
            onClick={() => handleSearch()}
          >
            {showSearch ? "Homepage" : "Search"}
          </button>
          <img className="w-12 h-12" src={PROFILE_LOGO_URL} alt="userison" />
          <button
            onClick={() => handleSignOut()}
            className="cursor-pointer mb-2 px-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow 
            hover:shadow-md transition-all duration-200 ease-in-out transform hover:-translate-y-0.5 
            active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
