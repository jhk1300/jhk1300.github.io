import ExperienceBio from '../components/experience/ExperienceBio';
// import ExperienceCounter from '../components/experience/ExperienceCounter';
// import ExperienceClients from '../components/experience/ExperienceClients';
import { ExperienceProvider } from '../context/ExperienceContext';
import { motion } from 'framer-motion';

const Experience = () => {
	return (
		<ExperienceProvider>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
				className="container mx-auto"
			>
				<ExperienceBio />
			</motion.div>

			{/** Counter without paddings */}
			{/* <motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
			>
				<ExperienceCounter />
			</motion.div>

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
				className="container mx-auto"
			>
				<ExperienceClients />
			</motion.div> */}
		</ExperienceProvider>
	);
};

export default Experience;
