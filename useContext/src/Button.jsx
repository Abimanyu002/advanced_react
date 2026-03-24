import React from "react"
import { Theme } from "./App"

export default function Button() {
    const value=React.useContext(Theme)
    return (
        <button className={value+"-theme"}>
            Switch Theme
        </button>
    )
}