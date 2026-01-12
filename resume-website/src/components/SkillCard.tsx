import { motion } from "framer-motion";
import type { SkillCategory } from "../data/skills";

export default function SkillCard({ category }: { category: SkillCategory }) {
  return (
    <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3 }}
        className={`rounded-2xl border p-6 shadow-sm bg-white dark:bg-gray-900 
            border-gray-200 dark:border-gray-800`}
        >
      <h3 className="text-lg font-semibold mb-4">{category.title}</h3>

      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="text-xs px-3 py-1 rounded-full 
              bg-gray-100 dark:bg-gray-800"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
