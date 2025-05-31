import React, { useState } from "react";
import { ToggleLeft, ToggleRight, Sun, Moon } from "@phosphor-icons/react";
import { root } from "postcss";

export default function Theme() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const root = document.getElementById("root");

  function toggleTheme() {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      root.classList.add("bg-neutral-900", "text-white");
    } else {
      root.classList.remove("bg-neutral-900", "text-white");
    }
  }

  return (
    <button
      onClick={toggleTheme}
      className="w-full p-2 hover:bg-neutral-100 border border-neutral-30 rounded transition-all"
    >
      {isDarkMode ? (
        <div className="flex gap-4 justify-between items-center">
          <Moon size={24} weight="fill" />
          <span className="text-start flex-1">Dark Mode</span>
          <ToggleRight size={24} weight="fill" className="" />
        </div>
      ) : (
        <div className="flex gap-4 justify-between items-center">
          <Sun size={24} weight="fill" />
          <span className="text-start flex-1">Light Mode</span>
          <ToggleLeft size={24} weight="fill" className="" />
        </div>
      )}
    </button>
  );
}
