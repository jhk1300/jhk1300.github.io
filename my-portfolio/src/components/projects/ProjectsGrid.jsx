import { useContext } from 'react';
// import { FiSearch } from 'react-icons/fi';
import ProjectSingle from './ProjectSingle';
// import FeaturedProject from "./FeaturedProject";
import { ProjectsContext } from '../../context/ProjectsContext';
// import ProjectsFilter from './ProjectsFilter';
import { tagColors } from '../shared/colors';

const ProjectsGrid = () => {
	const {
		projects,
		// searchProject,
		// setSearchProject,
		// searchProjectsByTitle,
		// selectProject,
		// setSelectProject,
		// selectProjectsByCategory,
	} = useContext(ProjectsContext);

	// 플래그로 분리
	const featuredProjects = projects.filter((p) => p.isFeatured);
	const otherProjects = projects.filter((p) => !p.isFeatured);

  return (
    <section className="py-5 sm:py-10 mt-5 sm:mt-10">
      {/* Project Categories → 카드(Grid) */}
      <div className="mt-16 max-w-4xl mx-auto">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-left text-primary-dark dark:text-primary-light">
          Project Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col border border-gray-200 dark:border-gray-700 rounded-lg shadow-md overflow-hidden h-96 bg-white dark:bg-gray-800"
            >
              {/* 이미지 영역 */}
              <div className="w-full h-40 bg-gray-100 flex items-center justify-center">
                {project.img && (
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              {/* 텍스트 영역 */}
              <div className="flex flex-col justify-between flex-1 p-4">
                  <h3 className="text-lg font-semibold text-ternary-dark dark:text-ternary-light mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-1">
                    <div className="text-xs text-gray-600 dark:text-gray-400 gap-1 line-clamp-1">
                      {project.description.map((cat, idx) => (
                        <div
                          key={idx}
                          className="bg-blue-100 dark:bg-blue-700 text-blue-800 dark:text-blue-100 text-xs font-medium px-2 py-1 rounded-full"
                        >
                          {cat}
                        </div>
                      ))}
                    </div>
                    {/* 카테고리 태그 */}
                    {/* <div className="mt-2 flex flex-wrap gap-2">
                      {project.tech.map((cat, idx) => (
                        <span
                          key={idx}
                          className="inline-block bg-blue-100 dark:bg-blue-700 text-blue-800 dark:text-blue-100 text-xs font-medium px-2 py-1 rounded-full"
                        >
                          {cat}
                        </span>
                      ))}
                    </div> */}
                  </p>
              </div>
            </div>
          ))}
        </div>
      </div>



      {/* Project details → 리스트(간단 UI) */}
      <div className="mt-16 max-w-4xl mx-auto pt-10">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-left text-primary-dark dark:text-primary-light">
          Project details
        </h2>
        <ul className="space-y-4">
          {otherProjects.map((project,ix) => (
            <li
              key={project.id}
              className={`flex items-center space-x-4 p-3 border rounded-lg shadow-sm hover:shadow-md transition bg-white dark:bg-gray-800 ${ix !== project.length - 1 ? "mb-2" : ""}`}
            >
              {/* 작은 썸네일 */}
              {/* <img
                src={project.img}
                alt={project.title}
                className="w-12 h-12 object-contain rounded-md"
              /> */}
              {/* 텍스트 */}
              <div>
                <h3 className="text-lg font-semibold text-ternary-dark dark:text-ternary-light mb-2">
                  ({project.period}) {project.title}
                </h3>
                {/* 카테고리 태그 */}
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.category.map((cat, idx) => (
                    <span
                      key={idx}
                      className="flex-shrink-0 pill-sky"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
                {/* 테크 태그 */}
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="flex-shrink-0 pill-green"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {/* 롤 태그 */}
                <div className="text-xs text-gray-600 dark:text-gray-400 gap-1 line-clamp-1">
                  {project.role.map((cat, idx) => (
                    <span
                      key={idx}
                      className="mt-2 text-ternary-dark dark:text-ternary-light">
                      {cat}{idx < project.role.length - 1 ? ', ' : ''}
                    </span>
                  ))}
                </div>
                {/* 설명 태그 */}
                <p className="text-xs text-gray-600 dark:text-gray-400 gap-1 line-clamp-1">
                  {project.description.map((cat, idx) => (
                    <div
                      key={idx}
                      className="inline-block bg-blue-100 dark:bg-blue-700 text-blue-800 dark:text-blue-100 text-xs font-medium px-2 py-1 rounded-full"
                    >
                      {cat}
                    </div>
                  ))}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectsGrid;