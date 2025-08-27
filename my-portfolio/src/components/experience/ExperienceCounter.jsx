// /portfolio/src/components/experience/ExperienceCounter.jsx
import CountItem from "./CounterItem";
import { useContext } from "react";
import { ExperienceContext } from "../../context/ExperienceContext";

export default function ExperienceCounter() {
  const { work, teaching, publications, awards } = useContext(ExperienceContext);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
      <CountItem number={work.length} label="Work Experiences" />
      <CountItem number={teaching.length} label="Lectures" />
      <CountItem number={publications.length} label="Publications" />
      <CountItem number={awards.length} label="Awards" />
    </div>
  );
}
