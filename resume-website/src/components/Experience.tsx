import { motion } from "framer-motion";
import { experiences } from "../data/experience";
import ExperienceItem from "./ExperienceItem";

export default function Experience() {
  return (
    <>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-10"
      >
        Experience
      </motion.h2>

      <div className="relative border-l border-gray-300 dark:border-gray-700 pl-6 space-y-10">
        {experiences.map((exp) => (
          <ExperienceItem key={exp.company} experience={exp} />
        ))}
      </div>
    </>
  );
}
