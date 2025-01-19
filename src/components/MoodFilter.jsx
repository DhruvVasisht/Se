import React from "react";
import Button from "./Button";
import mood from "../assets/mood.js";

const MoodFilter = () => {
  return (
    <>
      <h1 className="my-8 mood-center-container grid lg:text-5xl text-4xl font-bold">
        Discover top related Anime based On Your Mood
      </h1>
      <p>How Are You Feeling Right Now? 👀</p>
      <div className="my-10 grid lg:grid-cols-4 grid-cols-3 lg:gap-6 gap-4 mood-center-container">
        {Object.entries(mood).map(([mood, genre]) => (
          <Button key={genre} text={mood} />
        ))}
      </div>
    </>
  );
};

export default MoodFilter;
