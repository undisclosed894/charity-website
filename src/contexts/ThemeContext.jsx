import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    // Get theme from localStorage or default to 'current'
    return localStorage.getItem('charity-theme') || 'current';
  });

  useEffect(() => {
    // Update document attribute and localStorage when theme changes
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('charity-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'current' ? 'trusted-legacy' : 'current');
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}