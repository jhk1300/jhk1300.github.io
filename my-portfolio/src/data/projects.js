// Import images

import proj1 from '../images/proj1.png';
import proj2 from '../images/proj2.png';
import proj3 from '../images/proj3.png';
import proj4 from '../images/proj4.jpg';
import proj5 from '../images/proj5.png';
// import MobileImage2 from '../images/mobile-project-2.jpg';
// import UIImage1 from '../images/ui-project-1.jpg';
// import UIImage2 from '../images/ui-project-2.jpg';

export const projectsData = [
	{
		id: 1,
		title: "AI & Machine Learning",
		category: ["AI"],
		tech: ["Python, LangGraph, Qdrant, FastAPI, Docker, Mendix"],
		description: [
			"- LLM Services",
			"- RAG Pipelines",
			"- Computer Vision"
		],
		img: proj1,
		isFeatured: true,
	},
	{
		id: 2,
		title: "Data Engineering & Analytics",
		category: ["AI"],
		tech: ["Python, Image processing, LLM, Vue, OpenCV"],
		description: [
			"- Data Pipelines",
			"- Analytics & Root Cause Analysis",
			"- Data Visualization & Dashboards"
		],
		img: proj3,
		// link: "https://github.com/yourname/dl-image",
		isFeatured: true,
	},
	{
		id: 3,
		title: "Web Development & Infrastructure",
		category: ["AI"],
		tech: ["Python, Airflow, MongoDB, Mysql, FastAPI, Docker, Mendix"],
		description: [
			"- Full-Stack Web Development",
			"- Backend Systems (API & Databases)",
			"- Infrastructure & Operations (Setup & Tooling)"
		],
		img: proj4,
		isFeatured: true,
	},
	{
		id: 4,
		title: 'Code Search Web Platform',
		period: '2025 - present',
		role: ["Project Lead","Main Developer"],
		category: ["AI & Machine Learning","Web Development & Infrastructure"],
		tech : ["LLM","Langgraph","Qdrant","Postgres","FastAPI","Docker","Mendix"],
		description : [
			"- Developed a web platform for searching and registering SQL/Python code",
			"- Implemented Modular RAG for natural language search",
			"- Led the project end-to-end"
		],
		// img: WebImage2,
		// ProjectHeader: {
		// 	title: 'Project Management UI - From Context',
		// 	publishDate: 'Jul 26, 2021',
		// 	tags: 'UI / Frontend',
		// },
	},
	{
		id: 5,
		title: 'PPT Report Search Web Platform',
		period: '2025 - present',
		role: ["Project Lead","Main Developer"],
		category: ["AI & Machine Learning","Web Development & Infrastructure"],
		tech : ["LLM","Langgraph","Qdrant","MySQL","FastAPI","Docker","Vue"],
		description : [
			"- Developed a web platform for searching, and browsing defect report PPT files",
			"- Implemented Modular RAG for natural language search",
			"- Led the project end-to-end"
		],
		// img: MobileImage1,
	},
	{
		id: 6,
		title: 'Total View Web Platform',
		period: '2025 - present',
		role: ["Project Lead","Main Developer"],
		category: ["Web Development & Infrastructure"],
		tech : ["Impala","MySQL","FastAPI","Docker","Mendix"],
		description : [
			"- Integrated legacy system views into a unified web UI",
			"- Developed backend with APIs, image data, and ETL pipelines",
			"- Led project and cross-departmental collaboration"
		],
	},
	{
		id: 7,
		title: 'Image Processing Web Platform',
		period: '2024 - present',
		role: ["Main Developer"],
		category: ["AI & Machine Learning","Web Development & Infrastructure"],
		tech : ["LLM","Pytorch","MySQL","FastAPI","Docker","Vue"],
		description : [
			"- Built a platform for AI and traditional image processing",
			"- Developed AI-based segmentation, denoising, and similar image retrieval",
			"- Set up and optimized GPU environments for AI models"
		],
	},
	{
		id: 8,
		title: 'Recipe Database and Web Platform',
		period: '2023 - present',
		role: ["Main Developer"],
		category: ["Data Engineering & Analytics", "Web Development & Infrastructure"],
		tech : ["MongoDB","MySQL","Airflow","FastAPI","Docker","Mendix"],
		description : [
			"- Developed a system for process recipe data collection, storage, and retrieval",
			"- Designed whole data pipelines and visualization",
			"- Managed backend and database systems"
		],
		// img: WebImage1,
	},
	{
		id: 9,
		title: 'Data Analysis System',
		period: '2018 - present',
		role: ["Project Lead","Main Developer"],
		category: ["Data Engineering & Analytics"],
		tech : ["PaaS","Python","Stastics","Spotfire"],
		description : [
			"- Created an in-house analytics tool to identify root causes of defects in R&D center",
			"- Built data pipelines, applied analytical methods, and visualized results",
			"- Led and developed the full project lifecycle independently"
		],
		// img: WebImage1,
	},	
	{
		id: 10,
		title: 'Integrated Employee Information Sharing System',
		period: '2024 - 2024',
		role: ["Project Lead","Main Developer"],
		category: ["Web Development & Infrastructure"],
		tech : ["Python","Airflow","Mendix"],
		description : [
			"- Centralized workforce information into a web platform across the R&D center",
			"- Standardized schedules and automated data pipelines",
			"- Led project with cross-team collaboration"
		],
		// img: WebImage1,
	},
	{
		id: 11,
		title: 'Bonding Process Tracking Dashboard',
		period: '2024 - 2024',
		role: ["Project Lead","Main Developer"],
		category: ["Data Engineering & Analytics"],
		tech : ["Python","Airflow","Spotfire"],
		description : [
			"- Tracked manufacturing histories of lots with bonding processes",
			"- Built data pipelines, applied analytical methods, and visualized results",
			"- Led the project end-to-end"
		],
		// img: WebImage1,
	},
	{
		id: 12,
		title: 'Lot Monitoring Dashboard',
		period: '2024 - 2024',
		role: ["Project Lead","Main Developer"],
		category: ["Data Engineering & Analytics"],
		tech : ["Python","Airflow","Spotfire"],
		description : [
			"- Managed and monitored evaluation lots assigned to the department, including manufacturing history",
			"- Built data pipelines, applied analytical methods, and visualized results",
			"- Led the project end-to-end"
		],
		// img: WebImage1,
	},
	{
		id: 13,
		title: 'MI/TEM Index Monitoring System',
		period: '2023 - 2024',
		role: ["Project Lead","Main Developer"],
		category: ["Data Engineering & Analytics", "Web Development & Infrastructure"],
		tech : ["MySQL","Spotfire"],
		description : [
			"- Built monitoring system with data pipelines, visualized dashboard",
			"- Led project with cross-team collaboration"
		],
		// img: WebImage1,
	},
	{
		id: 14,
		title: "Team's Webpage",
		period: '2023 - 2023',
		role: ["Project Lead","Main Developer"],
		category: ["Web Development & Infrastructure"],
		tech : ["MySQL","Mendix"],
		description : [
			"- Built department-specific web pages for workflows",
		],
		// img: WebImage1,
	},
	{
		id: 18,
		title: 'MI Request system',
		period: '2023 - 2023',
		role: ["Project Lead","Main Developer"],
		category: ["Web Development & Infrastructure"],
		tech : ["MySQL","Mendix"],
		description : [
			"- Systematized inter-departmental task requests, coordination, and execution processes",
			"- Led project with cross-team collaboration"
		],
		// img: WebImage1,
	},

];
