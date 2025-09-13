import React, { useEffect, useState } from "react";

const AnimatedBackground: React.FC = () => {
  const [count, setCount] = useState(144);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setCount(64); // fewer particles on mobile
    }
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 motion-reduce:hidden">
        <div className="grid grid-cols-12 gap-1 opacity-60">
          {Array.from({ length: count }).map((_, i) => (
            <div
              key={i}
              className="w-1 h-1 bg-gradient-to-r from-amber-400 to-yellow-300 rounded-full animate-pulse"
              style={{
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/30 to-transparent blur-2xl animate-pulse motion-reduce:hidden" />
      </div>
    </div>
  );
};

export default AnimatedBackground;