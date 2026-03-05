import React from "react"
import classnames from "classnames"

export default function Button({ children, className, size,toggle, variant, ...rest }) {
    let sizeClass = size && `button-${size}`
    let variantClass = variant && `button-${variant}`
    const allClasses = classnames(sizeClass, variantClass, className)
    console.log(children.toggle)
    return (
        <button className={allClasses} {...rest} >
            {children}
        </button>
    )
}