import { useAccentTheme } from "../context/AccentThemeContext";

const accents = [
  { key: "blue", color: "bg-blue-600" },
  { key: "violet", color: "bg-violet-500" },
  { key: "emerald", color: "bg-emerald-500" },
] as const;

export default function AccentSwitcher() {
  const { accent, setAccent } = useAccentTheme();

  return (
    <div className="flex items-center gap-2">
      {accents.map((a) => (
        <button
          key={a.key}
          onClick={() => setAccent(a.key)}
          className={`w-5 h-5 rounded-full ${a.color} ring-2
            ${accent === a.key ? "ring-black dark:ring-white" : "ring-transparent"}`}
          aria-label={`Set ${a.key} accent`}
        />
      ))}
    </div>
  );
}
