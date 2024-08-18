import { useState } from "react";
import Header from "./Header";
import background from "../images/background.jpg";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <>
      <Header />
      <div className="absolute">
        <img src={background} alt="background" />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (<input
          className="px-4 py-2 my-4 w-full bg-gray-700 rounded-sm placeholder:text-lg"
          type="text"
          placeholder="Full Name"
        /> )
        }
        <input
          className="px-4 py-2 my-4 w-full bg-gray-700 rounded-sm placeholder:text-lg"
          type="text"
          placeholder="Email Address"
        />
       
        <input
          className="px-4 py-2 my-4 w-full bg-gray-700 rounded-sm placeholder:text-lg"
          type="password"
          placeholder="Password"
        />
        <button className="px-4 py-2 my-6 bg-red-700 w-full rounded-lg text-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="text-sm cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm ? (
            <div>
              New to Netflix? <b>Sign up now.</b>
            </div>
          ) : (
            <div>
              Already Registered? <b>Sign in now.</b>
            </div>
          )}
        </p>
      </form>
    </>
  );
};

export default Login;
