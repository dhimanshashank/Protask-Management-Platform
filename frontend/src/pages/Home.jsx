import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import TagLines from "../components/TagLines";

const Home = () => {
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
    <div className="flex bg-blackboard h-screen w-full">
      {/* Welcome section and logo */}
      <div className="flex flex-col px-20 py-10 items-center w-[60%] justify-center">
        <TagLines header="Welcome" />
      </div>

      {/* Navbar section */}
      <Navbar />
    </div>
  );
};

export default Home;
