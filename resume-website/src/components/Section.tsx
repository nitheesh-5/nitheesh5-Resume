import { motion } from "framer-motion";

interface Props {
  id: string;
  children: React.ReactNode;
}

export default function Section({ id, children }: Props) {
  return (
    <section
      id={id}
      className="px-6 py-24 scroll-mt-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        {children}
      </motion.div>
    </section>
  );
}
