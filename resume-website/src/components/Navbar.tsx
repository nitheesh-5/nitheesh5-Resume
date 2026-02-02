import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import AccentSwitcher from "./AccentSwitcher";
import { useActiveSection } from "../data/useActiveSection";

/* ================= LINKS ================= */

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

/* ================= VALENTINE MODAL ================= */

type ValentineModalProps = {
  onClose: () => void;
};

const messages: string[] = [
  "Are you sure?",
  "Really sure?",
  "Think again 😢",
  "Last chance!",
  "You don't have any other option",
];

function ValentineModal({ onClose }: ValentineModalProps) {
  const [messageIndex, setMessageIndex] = useState<number>(0);
  const [yesSize, setYesSize] = useState<number>(16);
  const [accepted, setAccepted] = useState<boolean>(false);

  const handleNo = () => {
    setMessageIndex((prev) => prev + 1);
    setYesSize((prev) => prev * 1.3);
  };

  if (accepted) {
    return (
      <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
        <div className="bg-white dark:bg-gray-900 p-10 rounded-xl text-center shadow-xl">
          <h2 className="text-2xl font-bold text-pink-500">
            Knew you’d say yes! 💖
          </h2>

          <button
            className="mt-6 px-4 py-2 bg-accent text-white rounded"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-900 p-10 rounded-xl text-center shadow-xl">
        <h2 className="text-2xl font-bold mb-6">
          Will you be my Valentine? 💘
        </h2>

        <div className="flex gap-6 justify-center items-center">
          <button
            style={{ fontSize: yesSize }}
            onClick={() => setAccepted(true)}
            className="bg-pink-500 text-white px-6 py-2 rounded transition"
          >
            Yes
          </button>

          {messageIndex < messages.length && (
            <button
              onClick={handleNo}
              className="bg-gray-300 dark:bg-gray-700 px-6 py-2 rounded transition"
            >
              No
            </button>
          )}
        </div>

        {messageIndex > 0 && messageIndex <= messages.length && (
          <p className="mt-6 text-sm text-gray-600 dark:text-gray-300">
            {messages[messageIndex - 1]}
          </p>
        )}
      </div>
    </div>
  );
}

/* ================= NAVBAR ================= */

export default function Navbar() {
  const [open, setOpen] = useState<boolean>(false);
  const [showValentine, setShowValentine] = useState<boolean>(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
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
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-40 backdrop-blur-md bg-white/70 dark:bg-black/60 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* BRAND */}
          <span
            className="font-bold text-lg cursor-pointer"
            onClick={() => setShowValentine(true)}
          >
            Nitheesh
          </span>

          {/* DESKTOP */}
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

          {/* MOBILE */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <button onClick={() => setOpen(true)}>
              <Menu />
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              className="fixed top-0 right-0 h-full w-3/4 max-w-sm bg-white dark:bg-black z-50 p-6"
            >
              <div className="flex justify-between items-center mb-10">
                <span className="font-bold text-lg">Menu</span>
                <div className="flex items-center gap-3">
                  <AccentSwitcher />
                  <button onClick={() => setOpen(false)}>
                    <X />
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-6 text-lg">
                {links.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`text-sm transition ${
                      active === link.href.substring(1)
                        ? "text-accent font-medium"
                        : "hover:text-accent"
                    }`}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* VALENTINE MODAL */}
      {showValentine && (
        <ValentineModal onClose={() => setShowValentine(false)} />
      )}
    </>
  );
}
