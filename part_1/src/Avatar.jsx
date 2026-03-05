import React from "react"
import { IoPersonSharp } from "react-icons/io5"
import classnames from "classnames"
/**
 * Challenge: Create a flexible Avatar component!
 * 
 * Check the slides for notes on how the component 
 * should be used.
 * 
 * Each of the 3 different avatars should have a 
 * wrapper div with the classes below:
 * 
 * With image: `avatar`
 * With initials: `avatar avatar-letters`
 * Anonymous: `avatar avatar-icon`
 * 
 * E.g. <Avatar>BZ</Avatar> should render
 * <div className="avatar avatar-letters">...</div>
 * 
 * Check the hints.md file if you are really stuck.
 * 
 * EXTRA CREDIT:
 * Randomize the background color of the non-image
 * avatars. Check the styles.css for some pre-written
 * color classes to add to the wrapper div.
 */

export default function Avatar(props) {
    if(props.alt){
       return (
        <div className="avatar">
            <img src={props.src} alt={props.alt} ></img>
        </div>
    )
    }
    else{
        const bgArray=["navy","pink","red","blue","green"]
        const bgColor=Math.floor(Math.random()*bgArray.length)
        console.log(bgArray[bgColor])
        if(props.children){

            return (
            <div className={classnames("avatar","avatar-letters",bgArray[bgColor])}>
                {props.children}
            </div>
        )
        }
        else{
        return (
            <div className={classnames("avatar","avatar-icon",bgArray[bgColor])}>
                <IoPersonSharp />
            </div>
        )
        }
    }
}