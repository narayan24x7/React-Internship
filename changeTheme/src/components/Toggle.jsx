import React, { useContext } from 'react';
import themeContext from '../context/themeContext';

function Toggle() {
  const { theme } = useContext(themeContext);

  return (
    <div className={`m-2 p-4 ${theme === 'light' ? 'bg-white ring-indigo-50 text-black' : 'bg-gray-800 ring-gray-700 text-white'}`}>
      Header
    </div>
  );
}

export default Toggle;
