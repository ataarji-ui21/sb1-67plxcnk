import React from 'react';

const SkipNavigation: React.FC = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-amber-400 focus:text-black focus:rounded focus:font-medium focus:shadow-lg focus:outline-none"
    >
      Skip to main content
    </a>
  );
};

export default SkipNavigation;