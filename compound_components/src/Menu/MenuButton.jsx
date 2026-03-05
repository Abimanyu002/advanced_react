import React from "react"
import Button from "../Button/Button"

export default function MenuButton({ buttonText, onClick }) {
    console.log(buttonText)
    return (
        <Button onClick={onClick}>{buttonText}</Button>
    )
}