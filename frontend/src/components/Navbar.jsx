import React from "react";
import { Link } from "react-router-dom";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center h-[80px] px-5 shadow-md bg-midnight text-white fixed w-full z-10">
      <div className="flex items-center justify-center">
        <img
          src={"../src/assets/Protask.png"}
          alt="logo"
          className={`cursor-pointer rounded-full transition-all duration-300 w-[4rem] h-[4rem] p-1`}
        />
        <h1 className="text-2xl font-bold ml-2">protask</h1>
      </div>

      <ul className="flex items-center">
        <li className="mx-4 cursor-pointer hover:text-rasbery">Home</li>
        <li className="mx-4 cursor-pointer hover:text-rasbery">Contact</li>
        <li className="mx-4 cursor-pointer text-rasbery font-bold text-xl">
            <Link to="/login" element={<Login />}>Login
            </Link></li>
        <span>|</span>
        <li className="mx-4 cursor-pointer font-bold text-xl">
            <Link to="/signup" element={<Signup />}>Signup</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
