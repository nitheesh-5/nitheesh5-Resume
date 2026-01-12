import { motion } from "framer-motion";
import type { Project } from "../data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
        <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3 }}
        className={`rounded-2xl border p-6 shadow-sm bg-white dark:bg-gray-900 
            border-gray-200 dark:border-gray-800`}
        >
      <h3 className="text-xl font-semibold mb-2">
        {project.title}
        {project.highlight && (
          <span className="ml-2 text-xs text-blue-600">★ Featured</span>
        )}
      </h3>

      <p className="text-gray-600 dark:text-gray-400 mb-4">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-xs px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
