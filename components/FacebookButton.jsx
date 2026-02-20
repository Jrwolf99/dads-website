"use client";

import { usePathname } from "next/navigation";

export default function FacebookButton() {
  const pathname = usePathname();
  const hide = pathname.includes("music") && pathname !== "/music";

  if (hide) return null;

  return (
    <a
      href="https://www.facebook.com/songwritingwolf"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 left-5 z-[100] bg-blue-500 text-white p-2 rounded-full shadow-sm border border-blue-700 hover:bg-blue-600"
    >
      <img
        src="/icons/facebook.svg"
        alt="Facebook"
        className="h-8 w-8 invert"
      />
    </a>
  );
}
