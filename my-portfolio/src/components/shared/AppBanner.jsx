import useThemeSwitcher from '../../hooks/useThemeSwitcher';
// import { FiArrowDownCircle } from 'react-icons/fi';
import home1 from '../../images/home1.jpg';
import home2 from '../../images/home2.jpg';
import home3 from '../../images/home3.jpg';
import { motion } from 'framer-motion';


const AppBanner = () => {
	const [activeTheme] = useThemeSwitcher();

	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
			className="flex flex-col items-center mt-12 md:mt-2"
		>
			{/* 텍스트 영역 */}
			<div className="w-full text-center mb-8">
				<motion.h1
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.1 }}
					className="font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-ternary-dark dark:text-primary-light uppercase"
				>
					GALLERY
				</motion.h1>
			</div>

			{/* 이미지 영역 */}
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.4 }}
				className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-5xl"
			>
				<img src={ activeTheme === 'dark' ? home1 : home1 } alt="Home 1" className="w-full h-64 object-cover rounded-xl shadow-lg" />
				<img src={ activeTheme === 'dark' ? home2 : home2 } alt="Home 2" className="w-full h-64 object-cover rounded-xl shadow-lg" />
				<img src={ activeTheme === 'dark' ? home3 : home3 } alt="Home 3" className="w-full h-64 object-cover rounded-xl shadow-lg" />
			</motion.div>
		</motion.section>
	);
};

export default AppBanner;