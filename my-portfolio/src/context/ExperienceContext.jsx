// src/context/ExperienceContext.jsx
import { useState, createContext } from "react";
import { experienceData } from "../data/experienceData";

export const ExperienceContext = createContext();

export const ExperienceProvider = ({ children }) => {
  const [experience, setExperience] = useState(experienceData);

  return (
    <ExperienceContext.Provider value={{ ...experience, setExperience }}>
      {children}
    </ExperienceContext.Provider>
  );
};
