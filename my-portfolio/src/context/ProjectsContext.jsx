import { useState, createContext } from 'react';
import { projectsData } from '../data/projects';

// Create projects context
export const ProjectsContext = createContext();

// Create the projects context provider
export const ProjectsProvider = (props) => {
	const [projects, setProjects] = useState(projectsData);
	const [searchProject, setSearchProject] = useState('');
	const [selectProject, setSelectProject] = useState('');

	// Search projects by project title
	const searchProjectsByTitle = projects.filter((item) => {
		const result = item.title
			.toLowerCase()
			.includes(searchProject.toLowerCase())
			? item
			: searchProject === ''
			? item
			: '';
		return result;
	});

	// Select projects by project category (배열 대응)
	const selectProjectsByCategory = projects.filter((item) => {
	// category가 배열이면 join, 문자열이면 그대로, 없으면 빈 문자열
	const categoryArray = Array.isArray(item.category)
		? item.category
		: item.category
		? [item.category]
		: [];

	// 배열을 문자열로 합치기
	const categoryStr = categoryArray.join(' ');

	// 첫 글자 대문자 처리
	const formattedCategory =
		categoryStr.charAt(0).toUpperCase() + categoryStr.slice(1);

	return formattedCategory.includes(selectProject);
	});

	// // Select projects by project category(string)
	// const selectProjectsByCategory = projects.filter((item) => {
	// 	let category =
	// 		item.category.charAt(0).toUpperCase() + item.category.slice(1);
	// 	return category.includes(selectProject);
	// });

	return (
		<ProjectsContext.Provider
			value={{
				projects,
				setProjects,
				searchProject,
				setSearchProject,
				searchProjectsByTitle,
				selectProject,
				setSelectProject,
				selectProjectsByCategory,
			}}
		>
			{props.children}
		</ProjectsContext.Provider>
	);
};
