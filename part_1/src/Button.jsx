import React from "react"
export default function Button({variant,children}) {
    /**
     * Challenge: 
     * 
     * Accept a `variant` prop and style the Button component
     * accordingly. The values can be `success`, `warning`, or `danger`. 
     * Check the Figma design for the specific colors to be used for each
     * variant.
     */   
    return (
        <button className={variant}>
            {variant}
        </button>
    )
}