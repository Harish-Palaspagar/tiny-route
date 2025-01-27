import { FaLink, FaShareAlt, FaEdit, FaChartLine } from "react-icons/fa";
import { motion } from "framer-motion";

const AboutPage = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 100,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  return (
    <div className="lg:px-14 sm:px-8 px-5 min-h-[calc(100vh-64px)] py-8 bg-gradient-to-r from-gray-50 to-blue-50">
      <motion.div
        className="bg-white w-full sm:py-12 py-10 px-8 rounded-lg shadow-lg lg:w-[75%] md:w-[85%] mx-auto mb-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-center sm:text-4xl text-3xl font-bold text-slate-800 italic mb-6 leading-snug">
          About <span className="text-blue-600">TinyRoute</span>
        </h1>
        <p className="text-gray-700 text-base mb-8 xl:w-[80%] lg:w-[85%] sm:w-[90%] w-full mx-auto text-center leading-relaxed">
          TinyRoute simplifies URL shortening for efficient sharing. Easily
          generate, manage, and track your shortened links. With powerful
          analytics, enhanced security, and lightning-fast redirects, TinyRoute
          is your ultimate URL management solution.
        </p>

        <div className="space-y-8 xl:w-[80%] lg:w-[85%] sm:w-[90%] w-full mx-auto">
          {/* Simple URL Shortening */}
          <motion.div
            className="flex items-start space-x-5 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg shadow-md py-8 px-6 hover:shadow-xl transition-shadow duration-300"
            variants={itemVariants}
          >
            <FaLink className="text-blue-600 text-4xl sm:text-5xl" />
            <div>
              <h2 className="text-lg font-semibold text-slate-800 mb-2">
                Simple URL Shortening
              </h2>
              <p className="text-gray-600 text-sm">
                Create short, memorable URLs effortlessly. Our intuitive interface ensures you can start shortening URLs in seconds.
              </p>
            </div>
          </motion.div>

          {/* Powerful Analytics */}
          <motion.div
            className="flex items-start space-x-5 bg-gradient-to-r from-green-50 to-green-100 rounded-lg shadow-md py-8 px-6 hover:shadow-xl transition-shadow duration-300"
            variants={itemVariants}
          >
            <FaShareAlt className="text-green-500 text-4xl sm:text-5xl" />
            <div>
              <h2 className="text-lg font-semibold text-slate-800 mb-2">
                Powerful Analytics
              </h2>
              <p className="text-gray-600 text-sm">
                Track link performance with detailed analytics. Optimize your marketing strategies with insights into clicks, locations, and referrals.
              </p>
            </div>
          </motion.div>

          {/* Enhanced Security */}
          <motion.div
            className="flex items-start space-x-5 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg shadow-md py-8 px-6 hover:shadow-xl transition-shadow duration-300"
            variants={itemVariants}
          >
            <FaEdit className="text-purple-500 text-4xl sm:text-5xl" />
            <div>
              <h2 className="text-lg font-semibold text-slate-800 mb-2">
                Enhanced Security
              </h2>
              <p className="text-gray-600 text-sm">
                Rest assured with advanced encryption and robust security measures to keep your data safe and secure.
              </p>
            </div>
          </motion.div>

          {/* Fast and Reliable */}
          <motion.div
            className="flex items-start space-x-5 bg-gradient-to-r from-red-50 to-red-100 rounded-lg shadow-md py-8 px-6 hover:shadow-xl transition-shadow duration-300"
            variants={itemVariants}
          >
            <FaChartLine className="text-red-500 text-4xl sm:text-5xl" />
            <div>
              <h2 className="text-lg font-semibold text-slate-800 mb-2">
                Fast and Reliable
              </h2>
              <p className="text-gray-600 text-sm">
                Enjoy lightning-fast redirects and 99.99% uptime with our reliable infrastructure.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="bg-white w-full sm:py-8 py-6 px-8 rounded-lg shadow-lg mt-8"
        variants={itemVariants}
      >
        <h2 className="text-center sm:text-2xl text-xl font-semibold text-slate-800 mb-4">
          Insight by Harish Palaspagar
        </h2>
        <p className="text-center text-gray-600 text-base leading-relaxed">
          "In the ever-evolving digital landscape, TinyRoute provides a streamlined solution for efficient URL management, combining ease of use, robust security, and comprehensive analytics to optimize online engagement and growth."
        </p>
      </motion.div>
    </div>
  );
};

export default AboutPage;
