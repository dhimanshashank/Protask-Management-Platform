import React from "react";
import TagLines from "../components/TagLines";

const Signup = () => {
    return (
    <div className="flex bg-midnight h-screen w-full items-center">
      {/* Signup form side section */}
      <TagLines header="Signup" />

      <form className="flex flex-col gap-4 p-10 bg-blackboard border border-gray-500 border-opacity-50 rounded-xl m-10 h-3/4">
        <h2 className="text-white text-3xl pb-4 font-bold">Signup</h2>
        <input
          type="text"
          placeholder="Username"
          className="text-white bg-blackboard border border-gray-500 border-opacity-50 rounded-lg p-2"
          required
        />
        <input
          type="text"
          placeholder="Email"
          className="text-white bg-blackboard border border-gray-500 border-opacity-50 rounded-lg p-2"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="text-white bg-blackboard border border-gray-500 border-opacity-50 rounded-lg p-2"
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="text-white bg-blackboard border border-gray-500 border-opacity-50 rounded-lg p-2"
          required
        />
        <div className="flex gap-2">
          <input
            type="checkbox"
            className="text-white bg-blackboard border border-gray-500 border-opacity-50 rounded-lg "
            required
          />
          <p className="text-white">
            I agree to the{" "}
            <a
              href="/"
              className="text-rasbery hover:text-white cursor-pointer transition-all duration-300"
            >
              terms and conditions{" "}
            </a>
          </p>
        </div>
        <button className="text-white bg-rasbery border border-gray-500 border-opacity-50 rounded-lg p-2 hover:bg-purple">
          Signup
        </button>

        {/* Login link */}
        <div className="flex">
          <p className="text-white mr-2">Already have an account?</p>
          <a
            href="/login"
            className="text-rasbery hover:text-purple cursor-pointer"
          >
            Login
          </a>
        </div>
      </form>
    </div>
  );
};

export default Signup;
