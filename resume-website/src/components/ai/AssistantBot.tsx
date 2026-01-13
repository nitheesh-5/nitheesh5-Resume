import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

import ChatBubble from "./ChatBubble";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";
import TypingIndicator from "./TypingIndicator";
import { assistantContext } from "../../data/assistantContext";

interface Message {
  text: string;
  isUser?: boolean;
}

type Intent =
  | "skills"
  | "experience"
  | "projects"
  | "education"
  | "certifications"
  | "contact"
  | "summary"
  | "fallback";

export default function AssistantBot() {
  const [open, setOpen] = useState(false);
  const [typing, setTyping] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    { text: assistantContext.greeting },
  ]);

  const panelRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  /* ---------------- Auto-scroll ---------------- */
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  /* ---------------- Lock background scroll ---------------- */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  /* ---------------- Close on outside click ---------------- */
  useEffect(() => {
    if (!open) return;

    const handler = (e: PointerEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("pointerdown", handler);
    return () => document.removeEventListener("pointerdown", handler);
  }, [open]);

  /* ---------------- Intent detection ---------------- */
  const detectIntent = (text: string): Intent => {
    const q = text.toLowerCase();

    if (
      q.includes("skill") ||
      q.includes("tech") ||
      q.includes("stack") ||
      q.includes("angular") ||
      q.includes(".net") ||
      q.includes("cloud") ||
      q.includes("azure") ||
      q.includes("ci/cd")
    ) {
      return "skills";
    }

    if (
      q.includes("experience") ||
      q.includes("work") ||
      q.includes("job") ||
      q.includes("role") ||
      q.includes("company")
    ) {
      return "experience";
    }

    if (
      q.includes("project") ||
      q.includes("projects") ||
      q.includes("portfolio") ||
      q.includes("app") ||
      q.includes("built")
    ) {
      return "projects";
    }

    if (
      q.includes("education") ||
      q.includes("degree") ||
      q.includes("college") ||
      q.includes("university")
    ) {
      return "education";
    }

    if (
      q.includes("certification") ||
      q.includes("certifications") ||
      q.includes("certified")
    ) {
      return "certifications";
    }

    if (
      q.includes("contact") ||
      q.includes("reach") ||
      q.includes("email") ||
      q.includes("linkedin")
    ) {
      return "contact";
    }

    if (
      q === "hi" ||
      q === "hello" ||
      q.includes("who") ||
      q.includes("about")
    ) {
      return "summary";
    }

    return "fallback";
  };

  /* ---------------- Scroll + highlight sections ---------------- */
  const highlightSection = (intent: Intent) => {
    const map: Record<Intent, string | null> = {
      skills: "skills",
      experience: "experience",
      projects: "projects",
      education: "education",
      certifications: "certifications",
      contact: "contact",
      summary: "about",
      fallback: null,
    };

    const id = map[intent];
    if (!id) return;

    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth", block: "start" });

    el.classList.add(
      "ring-4",
      "ring-indigo-400",
      "ring-offset-4",
      "transition-all"
    );

    setTimeout(() => {
      el.classList.remove(
        "ring-4",
        "ring-indigo-400",
        "ring-offset-4"
      );
    }, 2000);
  };

  /* ---------------- Polished, casual-friendly replies ---------------- */
  const generateReply = (intent: Intent): string => {
    switch (intent) {
      case "skills":
        return (
          "Here’s a quick snapshot of Nitheesh’s technical skill set 👇\n\n" +
          assistantContext.skills.map((s) => `• ${s}`).join("\n")
        );

      case "experience":
        return (
          "Nitheesh is a Senior Software Engineer with 4+ years of hands-on experience. " +
          "He’s worked mainly in the healthcare domain, building secure and scalable " +
          "applications and owning features from design all the way to production."
        );

      case "projects":
        return (
          "These are some of the key projects Nitheesh has worked on 🚀\n\n" +
          assistantContext.projects.map((p) => `• ${p}`).join("\n")
        );

      case "education":
        return (
          "🎓 Education details:\n\n" +
          "• B.E. in Electronics and Communication Engineering\n" +
          "• Maharaja Institute of Technology, Mysore\n" +
          "• Graduated in 2021 with a CGPA of 8.34"
        );

      case "certifications":
        return (
          "📜 Certifications earned so far:\n\n" +
          "• Microsoft Certified: Azure Fundamentals (AZ-900)\n" +
          "• Microsoft Certified: Azure AI Fundamentals (AI-900)"
        );

      case "contact":
        return (
          "📬 You can connect with Nitheesh via LinkedIn or use the contact section below. " +
          "He’s always open to discussing interesting opportunities!"
        );

      case "summary":
        return (
          "Nitheesh is a Senior Software Engineer who enjoys building clean, scalable " +
          "applications and solving real-world problems using Angular, .NET, and modern tooling."
        );

      default:
        return assistantContext.fallback;
    }
  };

  /* ---------------- Handle Send ---------------- */
  const handleSend = (text: string) => {
    setMessages((m) => [...m, { text, isUser: true }]);
    setTyping(true);

    setTimeout(() => {
      const intent = detectIntent(text);
      const reply = generateReply(intent);

      highlightSection(intent);

      setTyping(false);
      setMessages((m) => [...m, { text: reply }]);
    }, 500);
  };

  return (
    <>
      <ChatBubble onClick={() => setOpen(true)} />

      <AnimatePresence>
        {open && (
          <motion.div
            ref={panelRef}
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 80 }}
            transition={{ type: "spring", stiffness: 260, damping: 25 }}
            className="
              fixed z-50 bottom-4 right-4
              w-[calc(100%-2rem)] sm:w-80
              sm:bottom-24 sm:right-6
              rounded-2xl
              bg-white/70 dark:bg-black/70
              backdrop-blur-xl
              border border-gray-200/50 dark:border-gray-700/50
              shadow-2xl
            "
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b">
              <span className="font-semibold">Assistant</span>
              <button onClick={() => setOpen(false)}>
                <X size={16} />
              </button>
            </div>

            {/* Messages */}
            <div className="h-[60vh] sm:h-64 overflow-y-auto p-3 flex flex-col gap-2">
              {messages.map((m, i) => (
                <ChatMessage key={i} message={m.text} isUser={m.isUser} />
              ))}
              {typing && <TypingIndicator />}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <ChatInput onSend={handleSend} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
