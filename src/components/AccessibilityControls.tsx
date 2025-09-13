import React, { useState, useEffect } from "react";

const AccessibilityControls: React.FC = () => {
  const [active, setActive] = useState<string[]>([]);

  useEffect(() => {
    document.body.className = active.join(" ");
  }, [active]);

  const toggleClass = (cls: string) => {
    setActive((prev) =>
      prev.includes(cls) ? prev.filter((c) => c !== cls) : [...prev, cls]
    );
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-black/70 backdrop-blur-md border border-gray-700 rounded-lg p-3 flex space-x-2 text-xs font-mono">
      <button
        onClick={() => toggleClass("text-size-lg")}
        className="px-2 py-1 bg-gray-800 hover:bg-amber-400 hover:text-black rounded transition"
      >
        A+
      </button>
      <button
        onClick={() => toggleClass("high-contrast")}
        className="px-2 py-1 bg-gray-800 hover:bg-amber-400 hover:text-black rounded transition"
      >
        HC
      </button>
      <button
        onClick={() => toggleClass("dyslexia-font")}
        className="px-2 py-1 bg-gray-800 hover:bg-amber-400 hover:text-black rounded transition"
      >
        Dys
      </button>
    </div>
  );
};

export default AccessibilityControls;