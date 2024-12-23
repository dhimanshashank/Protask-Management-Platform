import React from "react";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";
import Todo from "../components/Todo";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Home = () => {
  return (
    <div className="flex bg-blackboard h-screen">
      {/* Sidebar component */}
      <Sidebar />

      {/* Main content top section */}
      <div className="flex flex-col w-full">
        <div className="flex h-20 w-full relative items-center justify-between">
          <h1 className="text-white text-2xl font-bold px-10 py-5">
            Dashboard
          </h1>
          <button className="bg-purple hover:bg-purple-800 text-white font-bold py-2 px-4 rounded-xl h-10 w-24 absolute right-16">
            Share
          </button>

          {/* More options button */}
          <button className="text-white font-bold py-2 px-4 h-10 w-10 absolute right-6">
            <MoreVertIcon />
          </button>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-6 p-10 w-full h-[calc(100vh-6rem)]">
          {/* Card 1 */}
          <div className="text-white border border-gray-500 border-opacity-50 rounded-lg p-4 relative">
            <Link to="/todo" element={<Todo />}></Link>
            <h2 className="text-md mb-2 absolute bottom-2 cursor-pointer">
              To-do List
            </h2>
          </div>

          {/* correct from here */}
          {/* Card 2 */}
          <div className="text-white border border-gray-500 border-opacity-50 rounded-lg p-4 relative">
            <h2 className="text-md mb-2 absolute bottom-2 cursor-pointer">
              Topics
            </h2>
          </div>

          {/* Card 3 */}
          <div className="text-white border border-gray-500 border-opacity-50 rounded-lg p-4 relative">
            <h2 className="text-md mb-2 absolute bottom-2 cursor-pointer">
              Project Management
            </h2>
          </div>

          {/* Card 4 */}
          <div className="text-white border border-gray-500 border-opacity-50 rounded-lg p-4 relative">
            <h2 className="text-md mb-2 absolute bottom-2 cursor-pointer">
              This week
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
