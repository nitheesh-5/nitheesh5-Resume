import { Mail, Phone, Linkedin, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <>
      <h2 className="text-3xl font-bold mb-8">Contact</h2>

      <div className="grid gap-6 sm:grid-cols-2">
        {/* Email */}
        <motion.a
          href="mailto:nitheesh0799@gmail.com"
          whileHover={{ y: -4, scale: 1.01 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="flex items-center gap-4 p-4 rounded-xl border
            bg-white dark:bg-gray-900
            border-gray-200 dark:border-gray-800
            shadow-sm hover:shadow-md
            transition-shadow"
        >
          <Mail className="w-5 h-5 text-accent" />
          <span>nitheesh0799@gmail.com</span>
        </motion.a>

        {/* Phone */}
        <motion.a
          href="tel:+918861594054"
          whileHover={{ y: -4, scale: 1.01 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="flex items-center gap-4 p-4 rounded-xl border
            bg-white dark:bg-gray-900
            border-gray-200 dark:border-gray-800
            shadow-sm hover:shadow-md
            transition-shadow"
        >
          <Phone className="w-5 h-5 text-accent" />
          <span>+91 88615 94054</span>
        </motion.a>

        {/* LinkedIn */}
        <motion.a
          href="https://linkedin.com/in/nitheesh5"
          target="_blank"
          rel="noreferrer"
          whileHover={{ y: -4, scale: 1.01 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="flex items-center gap-4 p-4 rounded-xl border
            bg-white dark:bg-gray-900
            border-gray-200 dark:border-gray-800
            shadow-sm hover:shadow-md
            transition-shadow"
        >
          <Linkedin className="w-5 h-5 text-accent" />
          <span>linkedin.com/in/nitheesh5</span>
        </motion.a>

        {/* Location */}
        <motion.div
          whileHover={{ y: -4, scale: 1.01 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="flex items-center gap-4 p-4 rounded-xl border
            bg-white dark:bg-gray-900
            border-gray-200 dark:border-gray-800
            shadow-sm hover:shadow-md
            transition-shadow"
        >
          <MapPin className="w-5 h-5 text-accent" />
          <span>Mysore, Karnataka</span>
        </motion.div>
      </div>
    </>
  );
}
