import { FaAngleDown } from "react-icons/fa6";
import ListItems from "./ListItems.jsx"
import { useState } from "react";
export default function Lists(props){
    const list=Object.entries(props)
    const [clicked,setClicked]=useState(false)
    return(
        <>
            <h2>
                {list[0][0]}
                <button onClick={()=>setClicked((click)=>!click)} ><FaAngleDown /></button>
            </h2>
            {clicked && <ul><ListItems items={list[0][1]}/></ul>}
        </>
    )
}
