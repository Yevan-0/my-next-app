"use client"

import { useState } from "react"

export const ThemeToggle = () => {
    const [dark, setDark] = useState(false);


    const toggleMode = () => {
        const next = !dark
        setDark(next)
        document.documentElement.classList.toggle("dark", next);
    }


    return (
        <div>
            <button onClick={toggleMode}
                className={`relative inline-flex items-center w-14 h-7 rounded-full transition-colors duration-300
                ${dark ? "bg-gray-700" : "bg-gray-300"}`}
            >
                <div className={`absolute w-5 h-5 rounded-full shadow transition-transform duration-300 
                    ${dark ? 'translate-x-8 bg-gray-300' : "translate-x-1 bg-gray-700"}`}/>
            </button>
        </div>
    )
}
