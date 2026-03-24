import React from "react"
import { Theme } from "./App"

export default function Header() {
    const value = React.useContext(Theme)
    
    /**
     * Challenge:
     * Part 1: Update our CSS className to use the context 
     * value instead of being hard-coded as "dark". Also,
     * change the text "Dark" in the h1 to correspond with
     * the `value` from context.
     */
    return (
        <header className={value+"-theme"}>
            <h1>{value[0].toUpperCase()+value.slice(1)} Theme</h1>
        </header>
    )
}