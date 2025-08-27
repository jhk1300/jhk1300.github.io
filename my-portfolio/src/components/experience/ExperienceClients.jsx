// /portfolio/src/components/experience/ExperienceClients.jsx
import { useContext } from "react";
import { ExperienceContext } from "../../context/ExperienceContext";
import ExperienceClientSingle from "./ExperienceClientSingle";

export default function ExperienceClients() {
  const { work } = useContext(ExperienceContext);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {work.map((item) => (
        <ExperienceClientSingle key={item.id} logo={item.logo} company={item.company} />
      ))}
    </div>
  );
}
