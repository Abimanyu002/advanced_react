import React from "react"

export default function MenuDropdown({ children }) {
    return (
        <div className="menu-dropdown">
            {children.map(
                item => (
                    <div
                        className="menu-item"
                        key={item}
                    >
                        {item}
                    </div>
                )
            )}
        </div>
    )
}