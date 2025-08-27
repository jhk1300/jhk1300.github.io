// /portfolio/src/components/experience/ExperienceClientSingle.jsx
export default function ExperienceClientSingle({ logo, company }) {
  return (
    <div className="flex flex-col items-center">
      {logo && <img src={logo} alt={company} className="w-16 h-16 object-contain" />}
      <p className="mt-2 text-sm font-medium">{company}</p>
    </div>
  );
}
