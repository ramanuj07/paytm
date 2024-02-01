import { useRef, useState } from "react";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const name = useRef("");
  const email = useRef("");
  const password = useRef("");

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div>
      <form
        action=""
        className="w-1/4 h-[35rem] p-2 m-2 my-40 mx-auto right-0 left-0 text-black rounded-lg border border-gray-300"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="text-3xl font-bold my-6">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Full name"
            className="w-full p-2 my-4 border border-black"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email address"
          className="w-full p-2 my-4 border border-black"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="w-full p-2 my-4 border border-black"
        />
        {!isSignIn && (
          <input
            ref={password}
            type="password"
            placeholder="Confirm Password"
            className="w-full p-2 my-4 border border-black"
          />
        )}
        <button className="w-full bg-blue-600 text-white p-2 my-2">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>

        <div className="flex items-center gap-2 my-4">
          <p>{isSignIn ? "New user?" : "Already a user?"} </p>
          <p className="underline cursor-pointer" onClick={toggleSignIn}>
            {isSignIn ? "Signup" : "SignIn"}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
