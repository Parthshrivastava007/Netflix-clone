import { signOut } from "firebase/auth";
import { LOGO_URL, PROFILE_LOGO_URL } from "../utlis/Images";
import { auth } from "../utlis/Firebase";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="absolute flex justify-between w-screen px-8 py-2 bg-gradient-to-b from-black z-10">
      <img className="w-44" src={LOGO_URL} alt="logo" />
      <div className="flex p-2">
        <img className="w-12 h-12" src={PROFILE_LOGO_URL} alt="userison" />
        <button
          onClick={() => handleSignOut()}
          className="font-bold text-white cursor-pointer"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Header;
