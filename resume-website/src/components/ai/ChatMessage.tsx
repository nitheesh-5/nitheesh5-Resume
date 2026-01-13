interface Props {
  message: string;
  isUser?: boolean;
}

export default function ChatMessage({ message, isUser }: Props) {
  return (
    <div
      className={`max-w-[80%] rounded-lg px-4 py-2 text-sm ${
        isUser
          ? "ml-auto bg-primary text-white"
          : "mr-auto bg-gray-100 dark:bg-gray-800"
      }`}
    >
      {message}
    </div>
  );
}
