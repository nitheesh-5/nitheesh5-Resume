import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

interface Props {
  onClick: () => void;
}

export default function ChatBubble({ onClick }: Props) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="
        fixed bottom-6 right-6 z-50
        rounded-full p-4
        backdrop-blur-md
        bg-white/70 dark:bg-black/70
        border border-gray-200 dark:border-gray-700
        shadow-lg
        text-black dark:text-white
      "
    >
      <MessageCircle size={22} />
    </motion.button>
  );
}
