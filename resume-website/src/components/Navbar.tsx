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

  const [name, setName] = useState<string>("");
  const [place, setPlace] = useState<string>("");
  const [time, setTime] = useState<string>("");

  const handleNo = () => {
    setMessageIndex((prev) => prev + 1);
    setYesSize((prev) => prev * 1.3);
  };

  const submitForm = async () => {
    const payload = {
      name,
      place,
      time,
      date: "14 Feb 2026",
    };

    try {
      await fetch("https://script.google.com/macros/s/AKfycbxsAMkaOFKaz0qSZAZhiEWRi13mk30LvR3e2_g_TWfHr26PWbhRf-oMpl-_33yhiDVXVA/exec", {
        method: "POST",
        body: JSON.stringify(payload),
      });

      alert("Congratulations 💖");
      onClose();
    } catch {
      alert("Failed to save");
    }
  };

  /* ===== ACCEPTED SCREEN ===== */
  if (accepted) {
    return (
      <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
        <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-xl w-[90%] max-w-md">
          <h2 className="text-2xl font-bold text-pink-500 mb-4 text-center">
            Knew you’d say yes! 💖
          </h2>

          <p className="mb-6 text-center text-gray-600 dark:text-gray-300">
            Now enter the details 😊
          </p>

          <div className="flex flex-col gap-4">
            <div>
              <label className="text-sm font-medium">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full mt-1 px-3 py-2 border rounded dark:bg-gray-800"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Place</label>
              <input
                type="text"
                value={place}
                onChange={(e) => setPlace(e.target.value)}
                className="w-full mt-1 px-3 py-2 border rounded dark:bg-gray-800"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Time</label>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full mt-1 px-3 py-2 border rounded dark:bg-gray-800"
              />
            </div>

            <div>
            <label className="text-sm font-medium">Date</label>
            <input
              type="text"
              value="14 Feb 2026"
              disabled
              className="
                w-full mt-1 px-3 py-2 border rounded
                bg-gray-100 text-gray-800
                dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700
                cursor-not-allowed
              "
            />
          </div>

          </div>

          <button
            className="mt-8 w-full px-4 py-2 bg-accent text-white rounded"
            onClick={submitForm}
          >
            Done
          </button>
        </div>
      </div>
    );
  }

  /* ===== INITIAL SCREEN ===== */
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
      <nav className="fixed top-0 left-0 w-full z-40 backdrop-blur-md bg-white/70 dark:bg-black/60 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span
            className="font-bold text-lg cursor-pointer"
            onClick={() => setShowValentine(true)}
          >
            Nitheesh
          </span>

          <div className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <a key={link.name} href={link.href} className="text-sm hover:text-accent">
                {link.name}
              </a>
            ))}
            <AccentSwitcher />
            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <button onClick={() => setOpen(true)}>
              <Menu />
            </button>
          </div>
        </div>
      </nav>

      {showValentine && (
        <ValentineModal onClose={() => setShowValentine(false)} />
      )}
    </>
  );
}

