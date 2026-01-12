import { createContext, useContext, useEffect, useState } from "react";

type AccentTheme = "blue" | "violet" | "emerald";

interface AccentContextType {
  accent: AccentTheme;
  setAccent: (theme: AccentTheme) => void;
}

const AccentThemeContext = createContext<AccentContextType | undefined>(
  undefined
);

const accentClassMap: Record<AccentTheme, string> = {
  blue: "",
  violet: "theme-violet",
  emerald: "theme-emerald",
};

export function AccentThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [accent, setAccent] = useState<AccentTheme>(() => {
    return (localStorage.getItem("accent") as AccentTheme) || "blue";
  });

  useEffect(() => {
    document.documentElement.classList.remove(
      "theme-violet",
      "theme-emerald"
    );

    const cls = accentClassMap[accent];
    if (cls) document.documentElement.classList.add(cls);

    localStorage.setItem("accent", accent);
  }, [accent]);

  return (
    <AccentThemeContext.Provider value={{ accent, setAccent }}>
      {children}
    </AccentThemeContext.Provider>
  );
}

export function useAccentTheme() {
  const ctx = useContext(AccentThemeContext);
  if (!ctx) {
    throw new Error("useAccentTheme must be used inside AccentThemeProvider");
  }
  return ctx;
}
