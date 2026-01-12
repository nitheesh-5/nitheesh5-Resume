import { motion } from "framer-motion";
import type { Experience } from "../data/experience";

export default function ExperienceItem({
  experience,
}: {
  experience: Experience;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative pl-8"
    >
      {/* Timeline dot */}
      <span className="absolute left-0 top-2 w-3 h-3 rounded-full bg-accent" />

      <h3 className="text-lg font-semibold">
        {experience.role} —{" "}
        <span className="text-blue-600">{experience.company}</span>
      </h3>

        <p className="text-sm text-gray-500 mb-3">
        {experience.location} • {experience.period}
        </p>

      <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
        {experience.highlights.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </motion.div>
  );
}
