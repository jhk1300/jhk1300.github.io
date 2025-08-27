import { motion } from "framer-motion";

const FeaturedProject = ({ title, description, techStack, image, link }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col md:flex-row items-center gap-6 rounded-xl shadow-lg p-6 mb-10 bg-secondary-light dark:bg-ternary-dark"
    >
      {/* Image */}
      <div className="w-full md:w-1/2">
        <img src={image} alt={title} className="rounded-xl" />
      </div>

      {/* Content */}
      <div className="w-full md:w-1/2 text-left">
        <h3 className="text-2xl font-bold text-ternary-dark dark:text-ternary-light mb-3">
          {title}
        </h3>
        <p className="text-lg text-ternary-dark dark:text-ternary-light mb-4">
          {description}
        </p>
        <p className="text-sm text-gray-500 mb-4">Tech Stack: {techStack}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-lg transition duration-300"
        >
          View Project
        </a>
      </div>
    </motion.div>
  );
};

export default FeaturedProject;
