import EducationBio from '../components/education/EducationBio';
// import EducationCounter from '../components/education/EducationCounter';
// import EducationClients from '../components/education/EducationClients';
import { EducationProvider } from '../context/EducationContext';
import { motion } from 'framer-motion';

const Education = () => {
	return (
		<EducationProvider>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
				className="container mx-auto"
			>
				<EducationBio />
			</motion.div>

			{/** Counter without paddings */}
			{/* <motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
			>
				<EducationCounter />
			</motion.div>

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
				className="container mx-auto"
			>
				<EducationClients />
			</motion.div> */}
		</EducationProvider>
	);
};

export default Education;
