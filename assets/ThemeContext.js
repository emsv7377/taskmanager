//import React, { createContext, useState } from 'react';
//import { DARK } from './Theme';

import React from 'react';

export default React.createContext();

/*const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState({ theme: DARK });
  
    const toggleTheme = (newTheme) => {
      setTheme({theme : newTheme});
    };
  
    return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    );
  };
  
  export default ThemeContext;*/

  