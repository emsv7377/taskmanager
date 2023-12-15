import React, { useState, useMemo } from 'react';
import ThemeContext from './ThemeContext';
import { DARK } from './Theme';

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => DARK);

  const themeContextValue = useMemo(() => ({theme, setTheme}), [theme]);
  
  return (
    <ThemeContext.Provider value={themeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
  };

export default ThemeProvider;