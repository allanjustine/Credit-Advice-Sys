import { useEffect, useRef } from "react";

export default function Teaxtarea({ customClass, error, icon, ...props }: any) {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const disableEnterKey = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        event.preventDefault();
      }
    };

    textAreaRef.current?.addEventListener("keydown", disableEnterKey);

    return () => {
      textAreaRef.current?.removeEventListener("keydown", disableEnterKey);
    };
  });

  return (
    <div className="relative">
      <textarea
        ref={textAreaRef}
        {...props}
        row={1}
        className={`pl-12 w-full rounded p-2 focus:outline-none focus:ring-1 hover:ring-1 hover:ring-blue-300 hover:shadow-md hover:shadow-blue-300 focus:ring-blue-400 bg-gray-100 border dark:bg-gray-700 dark:text-white text-black transition-colors duration-200 ${customClass} ${
          error ? "border-red-500" : "border-gray-300 dark:border-gray-600"
        }`}
      />
      <i
        className={`far fa-${icon} text-gray-500 absolute left-3 border-r pr-2 top-3 border-gray-500`}
      ></i>
    </div>
  );
}
