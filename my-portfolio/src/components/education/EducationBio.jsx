// src/components/education/EducationBio.jsx
import profileImage from "../../images/profile.jpeg";
import { useContext } from "react";
import EducationContext from "../../context/EducationContext";

const EducationBio = () => {
  const { education } = useContext(EducationContext);

  return (
    <div className="flex flex-col sm:flex-row gap-10 mt-10 sm:mt-20 font-general-regular">
      <div className="w-full sm:w-1/4 mb-7 sm:mb-0">
        <img src={profileImage} className="rounded-lg w-96" alt="" />
      </div>

			<div className="font-general-regular w-full sm:w-3/4 text-left">
        {education.map((item) => (
          <div key={item.id} className="relative">
            {/* 점 */}
            {/* <div className="absolute -left-[7px] w-4 h-4 bg-blue-500 rounded-full border-2 border-white dark:border-gray-800"></div> */}

            {/* 카드 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-2">
              <span
                className={`inline-block px-3 py-1 text-sm font-medium rounded-full mb-2 g-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200
                  ${
                    item.type === "Bachelor"
                      ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200"
                      : item.type === "Master"
                      ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200"
                      : "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-200"
                  }`}
              >
                {item.type}
              </span>

              <h3 className="text-lg font-semibold text-ternary-dark dark:text-ternary-light">
                {item.school}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {item.degree}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {item.period}
              </p>
              {item.bio && (
                <p className="text-lg  text-ternary-dark dark:text-ternary-light">
                  {item.bio}
                </p>
              )}
            </div>
          </div>
        ))}
			</div>

      {/* 프로필 */}
      {/* <div className="w-full sm:w-1/4 mb-7 sm:mb-0 flex sm:block items-start">
        <img
          src={profileImage}
          alt="Profile"
          className="rounded-lg w-48 sm:w-64 h-auto object-contain"
        />
      </div> */}

      {/* 타임라인 */}
      {/* <div className="w-full sm:w-3/4 relative pl-8 before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-2 before:border-l-2 before:border-gray-300 dark:before:border-gray-600">
        <ul className="space-y-10">
          {education.map((item) => (
            <li key={item.id} className="relative"> */}
              {/* 점 */}
              {/* <div className="absolute -left-[7px] w-4 h-4 bg-blue-500 rounded-full border-2 border-white dark:border-gray-800"></div> */}

              {/* 카드 */}
              {/* <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-2">
                <span
                  className={`inline-block px-3 py-1 text-sm font-medium rounded-full mb-2
                    ${
                      item.type === "Bachelor"
                        ? "bg-blue-100 text-blue-700"
                        : item.type === "Master"
                        ? "bg-green-100 text-green-700"
                        : "bg-purple-100 text-purple-700"
                    }`}
                >
                  {item.type}
                </span>

                <h3 className="text-lg font-semibold text-ternary-dark dark:text-ternary-light">
                  {item.school}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {item.degree}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {item.period}
                </p>
                {item.bio && (
                  <p className="text-lg  text-ternary-dark dark:text-ternary-light">
                    {item.bio}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div> */}
    </div>
  );
};

export default EducationBio;
