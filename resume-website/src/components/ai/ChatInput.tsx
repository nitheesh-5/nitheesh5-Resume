import { useState } from "react";

interface Props {
  onSend: (msg: string) => void;
}

export default function ChatInput({ onSend }: Props) {
  const [value, setValue] = useState("");

  const send = () => {
    if (!value.trim()) return;
    onSend(value);
    setValue("");
  };

  return (
    <div className="flex gap-2 border-t border-gray-200 dark:border-gray-800 p-3">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && send()}
        placeholder="Ask about me..."
        className="
          flex-1 rounded-md px-3 py-2 text-sm
          bg-white text-black placeholder-gray-500
          dark:bg-black dark:text-white dark:placeholder-gray-400
          border border-gray-300 dark:border-gray-700
          focus:outline-none focus:ring-2 focus:ring-primary/50
        "
      />
      <button
        onClick={send}
        className="rounded-md bg-primary px-4 py-2 text-sm text-white hover:opacity-90"
      >
        Send
      </button>
    </div>
  );
}
