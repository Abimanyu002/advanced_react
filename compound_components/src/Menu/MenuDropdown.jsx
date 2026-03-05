import React from "react"

export default function MenuDropdown({children,open,toggle}) {
    console.log( children, toggle,open )
    return (<>
        {
        
        open &&
        <div className="menu-dropdown" key={children}>
            {children}
        </div>
        }
    </>
    )
}