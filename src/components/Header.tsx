'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <header className="fixed top-0 right-0 lg:left-64 left-0 h-16 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 z-10">
      <div className="h-full px-6 flex items-center justify-between">
        <div className="text-lg font-semibold text-gray-800 dark:text-white lg:ml-0 ml-12">
          Egaoichi
        </div>
        <button
          onClick={() => setIsDark(!isDark)}
          className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
        >
          {isDark ? '🌞 Light' : '🌙 Dark'}
        </button>
      </div>
    </header>
  );
} 