import React from "react"
import MenuButton from "./MenuButton"
import MenuDropdown from "./MenuDropdown"

export default function Menu({ children }) {
    const [open, setOpen] = React.useState(true)

    function toggle() {
        setOpen(prevOpen => !prevOpen)
    }
    
    /**
     * Challenge:
     * Now that MenuButton and MenuDropdown are receiving
     * `open` and `toggle`, accept the necessary props in
     * those components and refactor them to use those props
     * to make the menu work again!
     * 
     * Hint: in MenuDropdown, you'll need to use conditional
     * rendering to either display the div OR display `null`
     */

    return (
        <div className="menu">
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    open,
                    toggle
                })
            })}
        </div>
    )
}
