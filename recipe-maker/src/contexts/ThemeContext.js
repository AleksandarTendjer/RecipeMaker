import React, { createContext, useState, useEffect } from 'react';

const ThemeContext = createContext(null);

const ThemeProvider = ({ children }) => {
  const [isDarkOn, setIsDarkOn] = useState(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    return savedDarkMode ? JSON.parse(savedDarkMode) : false;
  });
  const toggleDarkMode = () => {
    setIsDarkOn(!isDarkOn);
  };
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkOn));
    // Apply/remove 'dark' class from HTML element
    document.documentElement.classList.toggle('dark', isDarkOn);
  }, [isDarkOn]);

  return (
    <ThemeContext.Provider value={{ isDarkOn, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
