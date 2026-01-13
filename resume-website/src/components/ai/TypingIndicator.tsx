import { motion } from "framer-motion";

export default function TypingIndicator() {
  return (
    <div className="mr-auto rounded-lg bg-gray-100 dark:bg-gray-800 px-4 py-2 text-sm">
      <motion.span
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ repeat: Infinity, duration: 1.2 }}
      >
        Typing…
      </motion.span>
    </div>
  );
}
