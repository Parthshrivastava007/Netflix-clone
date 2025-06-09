import Header from "./Header";
import { LOGIN_URL } from "../utlis/Images";
import { useRef, useState } from "react";
import { checkValidData } from "../utlis/Validate";

const Login = () => {
  const [isSigninForm, setisSigninForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const number = useRef(null);

  const toggleSigninForm = () => {
    setisSigninForm(!isSigninForm);
  };

  const handleButtonClick = () => {
    const msg = checkValidData(
      email.current.value,
      password.current.value,
      number.current.value
    );
    setErrorMessage(msg);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={LOGIN_URL} alt="Bg-image" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSigninForm ? "Sign in" : "Sign up"}
        </h1>
        {!isSigninForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        {!isSigninForm && (
          <input
            ref={number}
            type="tel"
            placeholder="Mobile Number"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <p className="py-2 text-lg font-bold text-red-500">{errorMessage}</p>
        <button
          className="cursor-pointer p-4 my-6 bg-red-700 w-full"
          onClick={handleButtonClick}
        >
          {isSigninForm ? "Sign in" : "Sign up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSigninForm}>
          {isSigninForm
            ? "New to Netflix? Sign up Now"
            : "Already Registered? Sign in Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
