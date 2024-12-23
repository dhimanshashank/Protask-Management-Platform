import React, { useState } from "react";
import AssignmentIcon from "@mui/icons-material/Assignment";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState("Dashboard");
  const [isProjectDropdownOpen, setIsProjectDropdownOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleProjectDropdown = () => {
    setIsProjectDropdownOpen(!isProjectDropdownOpen);
    setActiveSection("Projects");
  };

  return (
    <div
      className={`h-screen bg-midnight p-2 pt-1 z-50 sidebar transition-all duration-300 ease-in-out border-r border-gray-500 border-opacity-50 ${
        isSidebarOpen ? "w-1/4" : "w-20"
      } flex flex-col`}
    >
      {/* Header of Sidebar */}
      <div className="flex items-center mb-4 border-b border-gray-500 border-opacity-50 mb-6">
        <img
          src={"../src/assets/Protask.png"}
          alt="logo"
          className={`cursor-pointer rounded-full transition-all duration-300 ${
            isSidebarOpen ? "w-[4rem] h-[4rem] p-1" : "w-[2rem] h-[2rem]"
          }`}
        />
        {isSidebarOpen && (
          <h1 className="text-white cursor-pointer text-2xl font-bold">
            protask
          </h1>
        )}
        <button
          className="ml-auto p-2 rounded focus:outline-none"
          onClick={toggleSidebar}
        >
          <img
            src={"../src/assets/sidebar/bars-solid.svg"}
            alt="toggle"
            className="w-5 h-5 cursor-pointer transition-all duration-300 ease-in-out transform rotate-180 z-50 hover:scale-110"
          />
        </button>
      </div>

      {/* User Profile */}
      <div
        className={`flex items-center mb-6 p-1 rounded-full ${
          activeSection === "Profile" ? "bg-[#39334F]" : ""
        }`}
        onClick={() => setActiveSection("Profile")}
      >
        <img
          src={"../src/assets/sidebar/user-solid.svg"}
          alt="userProfile"
          className={`rounded-full bg-[#39334F] cursor-pointer transition-all duration-300 ${
            isSidebarOpen ? "w-8 h-8 p-2 ml-4 mr-4" : "w-5 h-5 ml-2"
          }`}
        />
        {isSidebarOpen && (
          <>
            <h2 className="text-white cursor-pointer text-sm">John Doe</h2>
            <img
              src={"../src/assets/sidebar/caret-down-solid.svg"}
              alt="caret"
              className="w-4 h-4 cursor-pointer ml-4"
            />
          </>
        )}
      </div>

      {/* Navigation */}
      <div className="mb-2">
        {/* Dashboard */}
        <div
          className={`flex items-center cursor-pointer p-2 rounded-full ${
            activeSection === "Dashboard" ? "bg-[#39334F]" : ""
          }`}
          onClick={() => setActiveSection("Dashboard")}
        >
          <img
            src={"../src/assets/sidebar/table-list-solid.svg"}
            alt="dashboard"
            className="w-5 h-5 ml-2 mr-4"
          />
          {isSidebarOpen && <h2 className="text-white text-sm">Dashboard</h2>}
        </div>

        {/* Favorites */}
        <div
          className={`flex items-center cursor-pointer p-2 rounded-full ${
            activeSection === "Favorites" ? "bg-[#39334F]" : ""
          }`}
          onClick={() => setActiveSection("Favorites")}
        >
          <img
            src={"../src/assets/sidebar/star-solid.svg"}
            alt="favorites"
            className="w-5 h-5 ml-2 mr-4"
          />
          {isSidebarOpen && <h2 className="text-white text-sm">Favorites</h2>}
        </div>

        {/* Features Section */}
        <div
          className={`flex items-center cursor-pointer p-2 rounded-full mt-4 ${
            activeSection === "Projects" ? "bg-[#39334F]" : ""
          }`}
          onClick={toggleProjectDropdown}
        >
          {isSidebarOpen && (
            <img
              src={
                isProjectDropdownOpen
                  ? "../src/assets/sidebar/caret-down-solid.svg"
                  : "../src/assets/sidebar/caret-up-solid.svg"
              }
              alt="caret"
              className="w-4 h-4 ml-1 mr-3"
            />
          )}
          {!isSidebarOpen && (
            <AssignmentIcon
              className="w-5 h-5 ml-2 mr-4 text-white"
              onClick={toggleProjectDropdown}
            />
          )}
          {isSidebarOpen && <h2 className="text-white text-sm">Projects</h2>}
          {isSidebarOpen && (
            <img
              src={"../src/assets/sidebar/plus-solid.svg"}
              alt="add-project"
              className="w-4 h-4 cursor-pointer ml-auto mr-4"
            />
          )}
        </div>

        {/* Project List */}
        {isSidebarOpen && (
          <div
            className={`ml-12 transition-all duration-300 ${
              isProjectDropdownOpen ? "block" : "hidden"
            }`}
          >
            {["To-do List", "Read Me", "This Week", "Completed"].map(
              (project, index) => (
                <div
                  key={index}
                  className="flex items-center cursor-pointer p-2"
                >
                  <img
                    src={`../src/assets/sidebar/${
                      index === 0
                        ? "pen-to-square-solid.svg"
                        : index === 1
                        ? "book-solid.svg"
                        : index === 2
                        ? "calendar-week-solid.svg"
                        : "circle-check-regular.svg"
                    }`}
                    alt={project}
                    className="w-4 h-4 mr-4 opacity-50"
                  />
                  <h2 className="text-white text-sm opacity-50">{project}</h2>
                </div>
              )
            )}
          </div>
        )}
      </div>

     {/* Bottom Section */}
      <div className="mt-auto">
        <div className="flex items-center cursor-pointer p-2 hover:bg-[#FFCCCB] opacity-70 transition-all duration-300 rounded-full hover:scale-102 hover:opacity-100 hover:text-black">
          <img
            src="../src/assets/sidebar/trash-solid.svg"
            alt="delete-icon"
            className={`w-5 h-5 ml-1 mr-4 ${!isSidebarOpen && "ml-2"}`}
          />
          {isSidebarOpen && (
            <h2 className="text-white text-sm hover:text-black w-full">
              Trash
            </h2>
          )}
        </div>
        <div
          className={`w-full border-t border-gray-400 mt-2 opacity-50 ${
            isSidebarOpen ? "px-8" : ""
          }`}
        ></div>
        <div className="flex items-center cursor-pointer p-2 mt-2 mb-1 hover:bg-green-700 opacity-70 transition-all duration-200 rounded-full hover:scale-102">
          <img
            src={"../src/assets/sidebar/plus-solid.svg"}
            alt="add-app"
            className={`w-5 h-5 ml-1 mr-4 border border-white rounded-full opacity-50 ${
              !isSidebarOpen && "ml-2"
            }`}
          />
          {isSidebarOpen && <h2 className="text-white text-sm">New App</h2>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
