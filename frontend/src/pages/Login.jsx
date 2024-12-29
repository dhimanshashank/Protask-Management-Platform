import React from "react";
import TagLines from "../components/TagLines";

const Login = () => {
  return (
    <div className="flex bg-midnight h-screen w-full items-center">
      {/* Signup form side section */}
      <TagLines header="Login" />

      <form className="flex flex-col gap-4 p-10 bg-blackboard border border-gray-500 border-opacity-50 rounded-xl m-10 h-[calc(100vh-19rem)]">
        <h2 className="text-white text-3xl pb-4 font-bold">Login</h2>
        <input
          type="text"
          placeholder="Enter your Email"
          className="text-white bg-blackboard border border-gray-500 border-opacity-50 rounded-lg p-2"
          required
        />
        <input
          type="password"
          placeholder="Enter your Password"
          className="text-white bg-blackboard border border-gray-500 border-opacity-50 rounded-lg p-2"
          required
        />
        <button className="text-white bg-rasbery border border-gray-500 border-opacity-50 rounded-lg p-2 hover:bg-purple cursor-pointer transition-all duration-300">
          Login
        </button>

        {/* Signup link */}
        <div className="flex">
          <p className="text-white mr-2">Don't have an account?</p>
          <a
            href="/signup"
            className="text-rasbery hover:text-purple cursor-pointer"
          >
            Signup
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;
