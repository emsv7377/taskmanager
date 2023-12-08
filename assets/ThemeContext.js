import React from 'react';

import Theme from './Theme.js';

export default React.createContext();

/*export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    backgroundColor: 'white',
    color: 'black'
  });

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};*/ 