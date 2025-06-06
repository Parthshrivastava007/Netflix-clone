import Header from "./Header";
import { LOGIN_URL } from "../utlis/Images";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={LOGIN_URL} alt="Bg-image" />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg opacity-80">
        <h1 className="font-bold text-3xl py-4">Sign In</h1>
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <button className="p-4 my-6 bg-red-700 w-full">Sign In</button>
      </form>
    </div>
  );
};

export default Login;
