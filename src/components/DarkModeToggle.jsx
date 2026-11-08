import React from 'react'

  // TODO: Implement dark mode toggle logic


const DarkModeToggle = ({isDarkMode, toggleDarkMode}) => {
     
  return (
    <button onClick={toggleDarkMode}> 
    Toggle {isDarkMode ? `Light` : `Dark`} Mode
    </button>

    
  )
}

export default DarkModeToggle
