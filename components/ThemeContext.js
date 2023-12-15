import React, { createContext, useState } from 'react';
import { DARK } from './Theme';

//import React from 'react';

//export default React.createContext();

const ThemeContext = createContext();

export const useTheme = () => {
  //const [theme, setTheme] = useState({ theme: DARK });
  const ThemeContext = createContext();

  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
  
  export default ThemeContext;

  