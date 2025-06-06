import Header from "./Header";
import { LOGIN_URL } from "../utlis/Images";
import { useState } from "react";

const Login = () => {
  const [isSigninForm, setisSigninForm] = useState(true);

  const toggleSigninForm = () => {
    setisSigninForm(!isSigninForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={LOGIN_URL} alt="Bg-image" />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSigninForm ? "Sign in" : "Sign up"}
        </h1>
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
        <button className="p-4 my-6 bg-red-700 w-full">
          {isSigninForm ? "Sign in" : "Sign up"}
        </button>
        <p className="py-4" onClick={toggleSigninForm}>
          {isSigninForm ? "New to Netflix? Sign up Now" : "Already Registered? Sign in Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
