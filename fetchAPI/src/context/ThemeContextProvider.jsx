import React, { useState } from 'react'
import themeContext from './themeContext'

function ThemeContextProvider({ children }) {
    let [theme, setTheme] = useState("light")

    let toggleTheme = () => {
        console.log("Btn Cliked");
        setTheme((prev) => (prev == "light" ? "dark" : "light"))
    }
    return (
        <themeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </themeContext.Provider>
    )
}

export default ThemeContextProvider