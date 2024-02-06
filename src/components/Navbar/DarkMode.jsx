// eslint-disable-next-line no-unused-vars
import React from 'react';

import { FaMoon, FaSun } from "react-icons/fa";


const DarkMode = () => {
    const [theme, setTheme] = React.useState(
      localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
    );
  
    const element = document.documentElement;
  
    React.useEffect(() => {
      localStorage.setItem('theme', theme);
      if (theme === 'dark') {
        element.classList.add('dark');
      } else {
        element.classList.remove('dark');
      }
    }, [theme, element]);
  
    return (
      <div className='relative'>
        {theme === 'light' ? (
          <FaSun
            onClick={() => setTheme('dark')}
            className={`w-12 cursor-pointer  opacity-100 transition-all duration-300`} 
          />
        ) : (
          <FaMoon
            onClick={() => setTheme('light')}
            className={`w-12 cursor-pointer relative`} 
          />
        )}
      </div>
    );
  };
  



export default DarkMode;