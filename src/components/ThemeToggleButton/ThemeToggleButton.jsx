import { useEffect, useState } from 'react';

const ThemeToggleButton = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="theme">
      <button
        onClick={toggleTheme}
        style={{
          backgroundColor: theme === 'dark' ? '#fff' : '#333',
          color: theme === 'dark' ? '#000' : '#fff',
        }}
      >
        {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
      </button>
    </div>
  );
};

export default ThemeToggleButton;