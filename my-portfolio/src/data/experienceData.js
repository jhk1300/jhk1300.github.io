// Import images
import WorkImg1 from '../images/brands/Samsung.png';
import WorkImg2 from '../images/brands/HyundaiMobis.png';
import WorkImg3 from '../images/brands/hyundaiMipo.jpg';
import WorkImg4 from '../images/brands/SamsungHeavyindustry.png';
import TeachingImg1 from '../images/teaching1.png';
import TeachingImg2 from '../images/teaching2.jpg';
import TeachingImg3 from '../images/teaching3.jpg';


export const experienceData = {
	work:[
	{
		id: 1,
		company: "Samsung Electronics",
		position: "Staff Engineer(Full-stack Engineer, ML Engineer)",
		period: "2022 - present",
		description: [
			"- Development of AI projects with LLMs, RAG, and AI-based image processing.",
			"- Development of data analytics with data pipeline, RCA, and dashboard.",
			"- Development of Full-stack web, and tooling infrastructure.",
		],
		logo: WorkImg1
	},
	{
		id: 2,
		company: "Samsung Electronics",
		position: "Engineer(Data Scientist)",
		period: "2018 - 2021",
		description: [
			"- Root cause Analysis in DRAM(D1z, D1a, D1b, D1c) and developing auto analysis solution.",
			"- Abnormal detection with measurement and inspection.",
			"- Managed, tracked and predicted main lots' manufacuturing quality state.",
		],
		logo: WorkImg1
	},
	{
		id: 3,
		company: "Hyundai Mobis",
		position: "Research Engineer",
		period: "2017 - 2018",
		description: [
			"- Development of car’s steering system.",
			"- Gear system optimization.",
		],
		logo: WorkImg2
	},
	{
		id: 4,
		company: "Hyundai Mipo",
		position: "Internship",
		period: "2014 - 2014",
		description: [
			"- Internship with drawings tools."
		],
		logo: WorkImg3
	},
	{
		id: 5,
		company: "Samsung Heavy Industry",
		position: "Internship",
		period: "2013 - 2013",
		description: [
			"- Internship with drawings tools."
		],
		logo: WorkImg4
	}
	],
	teaching : [
	{
      id: 1,
      course: "Practical ETL Course",
      institution: "Samsung internal lecture",
      period: "2024 - present",
      description: "- Delivered practical training on ETL processes tailored to corporate environments.",
	  logo: TeachingImg1
	},
    {
      id: 2,
      course: "Fundamentals of Data Analysis",
      institution: "Samsung internal lecture",
      period: "2024 - present",
      description: "- Conducted training on data analysis methods applied to semiconductor manufacturing data.",
	  logo: TeachingImg2
    },
	{
      id: 3,
	  course: "Spotfire Workshop",
      institution: "Samsung internal lecture",
      period: "2024 - present",
      description: "- Led training and hands-on workshops on building and utilizing Spotfire dashboards.",
	  logo: TeachingImg3
    },
	],
	publications : [
	{
      id: 1,
      title: "Spotfire 간단히 그래프 그리기",
      type: "Book",
      publisher: "Puple",
      year: 2022,
    },
	], 
	awards: [
    {
      id: 1,
      title: "2024 SRD e-Technology Journal",
      organization: "Samsung Electronics CTO",
      year: 2024,
    },
    {
      id: 2,
      title: "2023 The Innovator",
      organization: "Samsung Electronics CTO",
      year: 2023,
    },
	]

};
