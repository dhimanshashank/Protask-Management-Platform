import React, { useState } from "react";

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState("Dashboard");

  return (
    <div className="h-screen bg-midnight w-1/4 p-3 z-50">
      {/* Header of sidebar -> Includes logo, name and hide sidebar button */}
      <div className="flex items-center mb-4">
        <img
          src={"../src/assets/Protask.png"}
          alt="logo"
          className="cursor-pointer p-1 w-[4rem] h-[4rem] rounded-full"
        />
        <h1 className="text-white cursor-pointer text-2xl font-bold ml-1">
          protask
        </h1>
        <img
          src={"../src/assets/sidebar/bars-solid.svg"}
          alt="bars"
          className="w-6 h-6 cursor-pointer ml-auto mr-4"
        />
      </div>

      {/* User profile of sidebar */}
      <div className="flex items-center mb-6">
        <img
          src={"../src/assets/sidebar/user-solid.svg"}
          alt="userProfile"
          className="w-8 h-8 cursor-pointer ml-4 mr-4 rounded-full bg-[#39334F] p-2"
        />
        <h2 className="text-white cursor-pointer text-sm">John Doe</h2>
        <img
          src={"../src/assets/sidebar/caret-down-solid.svg"}
          alt="userProfile"
          className="w-4 h-4 cursor-pointer ml-4 mr-4"
        />
      </div>

      {/* Navigation of sidebar */}
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
            className="w-5 h-5 cursor-pointer ml-4 mr-4"
          />
          <h2 className="text-white text-sm">Dashboard</h2>
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
            alt="Favorites"
            className="w-5 h-5 cursor-pointer ml-4 mr-4"
          />
          <h2 className="text-white text-sm">Favorites</h2>
        </div>
      </div>

      {/* Various aspects of features such as project management */}
      <div>
        {/* Header for Project Management */}
        <div>
          <div className="flex items-center cursor-pointer p-2">
            <img
              src={"../src/assets/sidebar/caret-up-solid.svg"}
              alt="Projects"
              className="w-5 h-5 cursor-pointer ml-1 mr-2"
            />
            <h2 className="text-white text-md">Project Management</h2>
            <img
              src={"../src/assets/sidebar/plus-solid.svg"}
              alt="Add Project"
              className="w-5 h-5 cursor-pointer ml-auto mr-4"
            />
          </div>

          {/* List of Projects */}
          <div className="ml-12">
            <div className="flex items-center cursor-pointer p-2">
              <img
                src={"../src/assets/sidebar/pen-to-square-solid.svg"}
                alt="To-do List"
                className="w-5 h-5 cursor-pointer mr-4 opacity-50"
              />
              <h2 className="text-white text-sm opacity-50">To-do List</h2>
            </div>

            <div className="flex items-center cursor-pointer p-2">
              <img
                src={"../src/assets/sidebar/book-solid.svg"}
                alt="Read Me"
                className="w-5 h-5 cursor-pointer mr-4 opacity-50"
              />
              <h2 className="text-white text-sm opacity-50">Read Me</h2>
            </div>

            <div className="flex items-center cursor-pointer p-2">
              <img
                src={"../src/assets/sidebar/calendar-week-solid.svg"}
                alt="Read Me"
                className="w-5 h-5 cursor-pointer mr-4 opacity-50 rounded-sm"
              />
              <h2 className="text-white text-sm opacity-50">This Week</h2>
            </div>

            <div className="flex items-center cursor-pointer p-2">
              <img
                src={"../src/assets/sidebar/circle-check-regular.svg"}
                alt="Read Me"
                className="w-5 h-5 cursor-pointer mr-4 opacity-50"
              />
              <h2 className="text-white text-sm opacity-50">Completed</h2>
            </div>
          </div>
        </div>

        {/* Bottom of sidebar */}
        <div className="flex flex-wrap items-center cursor-pointer p-2 absolute bottom-0">
          <div className="flex items-center cursor-pointer p-2">
            <img
              src="../src/assets/sidebar/trash-solid.svg"
              alt="delete icon"
              className="w-5 h-5 cursor-pointer ml-1 mr-4 opacity-50"
            />
            <h2 className="text-white text-sm">Trash</h2>
          </div>

          <div className="w-full border-t border-gray-200 mt-2 opacity-50 px-8"></div>

          <div className="flex items-center cursor-pointer p-2 mt-2 mb-1">
            <img
              src={"../src/assets/sidebar/plus-solid.svg"}
              alt="Add app"
              className="w-5 h-5 cursor-pointer ml-1 mr-4 border border-white rounded-full opacity-50 p-0.5"
            />
            <h2 className="text-white text-sm">New App</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
