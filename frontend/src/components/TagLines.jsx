import React from "react";
import { useState, useEffect } from "react";

const TagLines = ({ header }) => {
  const taglines = [
    "Your personal task manager.",
    "Boost your productivity effortlessly.",
    "Stay organized, stay ahead.",
    "Tasks simplified, goals achieved.",
    "Your partner in task management.",
  ];
  const [currentTagline, setCurrentTagline] = useState(taglines[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => {
        const currentIndex = taglines.indexOf(prev);
        return taglines[(currentIndex + 1) % taglines.length];
      });
    }, 8000); // Match the animation duration (6s)
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center">
        <h1 className="text-white text-4xl font-bold pl-20">
          {header} to <span className="text-rasbery text-5xl">ProTask </span>
        </h1>
        <img
          src={"../src/assets/Protask.png"}
          alt="logo"
          className="cursor-pointer rounded-full transition-all duration-300 w-[5rem] h-[5rem] mr-20"
        />
      </div>
      <p className="text-white text-xl font-bold flex overflow-hidden whitespace-nowrap border-r-2 border-r-white pr-5 animate-typing mt-4">
        {currentTagline}
      </p>
    </div>
  );
};

export default TagLines;
