import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import AccentSwitcher from "./AccentSwitcher";
import { useActiveSection } from "../data/useActiveSection";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];


export default function Navbar() {
  const [open, setOpen] = useState(false);

  // 🔒 Lock background scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

    const active = useActiveSection([
    "home",
    "about",
    "skills",
    "experience",
    "projects",
    "education",
    "certifications",
    "contact",
    ]);

  return (
    <>
      {/* ===== NAVBAR ===== */}
      <nav className="fixed top-0 left-0 w-full z-40 backdrop-blur-md bg-white/70 dark:bg-black/60 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Brand */}
          <span className="font-bold text-lg">Nitheesh</span>

          {/* ===== Desktop Nav ===== */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm hover:text-accent transition"
              >
                {link.name}
              </a>
            ))}
            <AccentSwitcher />
            <ThemeToggle />
          </div>

          {/* ===== Mobile Controls ===== */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <Menu />
            </button>
          </div>
        </div>
      </nav>

      {/* ===== MOBILE MENU ===== */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setOpen(false)}
            />

            {/* Slide-in Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-3/4 max-w-sm
                bg-white dark:bg-black z-50 p-6"
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-10">
                <span className="font-bold text-lg">Menu</span>
                <div className="flex items-center gap-3">
                  <AccentSwitcher />
                  <button
                    onClick={() => setOpen(false)}
                    aria-label="Close menu"
                  >
                    <X />
                  </button>
                </div>
              </div>

              {/* Links */}
              <div className="flex flex-col gap-6 text-lg">
                {links.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`text-sm transition
                        ${active === link.href.substring(1)
                            ? "text-accent font-medium"
                            : "hover:text-accent"}
                        `}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
