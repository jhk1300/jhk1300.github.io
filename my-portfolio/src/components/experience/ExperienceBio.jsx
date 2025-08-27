import { useContext } from "react";
import { ExperienceContext } from "../../context/ExperienceContext";

export default function ExperienceBio() {
  const { work, teaching, publications, awards } = useContext(ExperienceContext);

  return (
    <div className="space-y-20 mt-10 sm:mt-20 font-general-regular">
      {/* Work Experience */}
      <section>
        <h3 className="text-2xl font-bold mb-6 text-ternary-dark dark:text-ternary-light">
          Work Experience
        </h3>
        <div className="space-y-8">
          {work.map((item, idx) => (
            <div
              key={item.id}
              className={`block sm:flex sm:gap-10 p-4 border rounded-lg shadow-sm ${idx !== work.length - 1 ? "mb-2" : ""}`}
            >
              {/* 회사 로고 */}
              <div className="w-full sm:w-1/4 mb-7 sm:mb-0 flex justify-center sm:justify-start">
                {item.logo && (
                  <div className="w-full sm:w-52 md:w-60 lg:w-64 h-auto object-contain">
                    <img
                      src={item.logo}
                      alt={item.company}
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}
              </div>

              {/* 텍스트 내용 */}
              <div className="w-full sm:w-3/4 text-left">
                <h4 className="text-xl font-semibold text-ternary-dark dark:text-ternary-light">
                  ({item.period}) {item.company}
                </h4>
                <p className="mt-2 text-ternary-dark dark:text-ternary-light">
                  {item.position} 
                </p>
                <div className="mt-2 space-y-1 text-ternary-dark dark:text-ternary-light">
                  {item.description.map((desc, idx) => (
                    <p key={idx}>{desc}</p>
                  ))}
                </div>
                {/* <p className="mt-2 text-ternary-dark dark:text-ternary-light">
                  {item.description}
                </p> */}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Teaching */}
      <section className="pt-10">
        <h3 className="text-2xl font-bold mb-6 text-ternary-dark dark:text-ternary-light">
          Teaching
        </h3>
        <div className="space-y-12">
          {teaching.map((item, idx) => (
            <div
              key={item.id}
              className={`block sm:flex sm:gap-10 p-4 border border-gray-200 dark:border-gray-700 rounded-lg ${idx !== item.length - 1 ? "mb-2" : ""}`}
            >
              <div className="w-full sm:w-1/4 mb-7 sm:mb-0 flex justify-center sm:justify-start">
                {item.logo && (
                  <div className="w-full sm:w-52 md:w-60 lg:w-64 h-auto object-contain">
                    <img
                      src={item.logo}
                      alt={item.institution}
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}
              </div>
              <div className="w-full sm:w-3/4 text-left">
                <h4 className="text-lg font-semibold text-ternary-dark dark:text-ternary-light">
                  {item.course}
                </h4>
                <p className="mt-2 text-ternary-dark dark:text-ternary-light">
                  {item.institution} ({item.period})
                </p>
                <p className="mt-2 text-ternary-dark dark:text-ternary-light">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Publications */}
      <section className="pt-10">
        <h3 className="text-2xl font-bold mb-6 text-ternary-dark dark:text-ternary-light">
          Publications
        </h3>
        <ul className="space-y-6">
          {publications.map((pub, idx) => (
            <li
              key={pub.id}
              className={`p-4 border border-gray-200 dark:border-gray-700 rounded-lg ${idx !== pub.length - 1 ? "mb-2" : ""}`}
            >
              <p className="text-ternary-dark dark:text-ternary-light">
                [{pub.type}] {pub.title} – ({pub.publisher}, {pub.year})
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* Awards */}
      <section className="pt-10">
        <h3 className="text-2xl font-bold mb-6 text-ternary-dark dark:text-ternary-light">
          Awards
        </h3>
        <ul className="space-y-6">
          {awards.map((award,idx) => (
            <li
              key={award.id}
              className={`p-4 border border-gray-200 dark:border-gray-700 rounded-lg ${idx !== award.length - 1 ? "mb-2" : ""}`}
            >
              <p className="text-ternary-dark dark:text-ternary-light">
                {award.title} – ({award.organization}, {award.year})
              </p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
