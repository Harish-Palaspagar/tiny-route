/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const Card = ({ title, desc }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 120 }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border flex flex-col px-6 py-8 gap-4 rounded-xl"
    >
      <h1 className="text-slate-800 text-2xl font-semibold mb-3">{title}</h1>
      <p className="text-slate-600 text-sm font-medium">{desc}</p>
    </motion.div>
  );
};

export default Card;
