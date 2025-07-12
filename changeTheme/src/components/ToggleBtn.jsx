import React, { useContext } from 'react'
import themeContext from '../context/themeContext'

function ToggleBtn() {
  let { theme, toggleTheme } = useContext(themeContext)
  return (
    <div>
      <button onClick={toggleTheme} className='bg-blue-300 rounded-md border p-4 text-white'>
        Swith Theme {theme}
      </button>
    </div>
  )
}

export default ToggleBtn