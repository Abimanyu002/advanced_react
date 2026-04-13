import { FaAngleDown } from "react-icons/fa6";
import ListItems from "./ListItems.jsx"
import { useState } from "react";
import { MdOutlineDeleteForever } from "react-icons/md";

export default function Lists(props){
    const [clicked,setClicked]=useState(false)
    const [currentListName,setCurrentListName]=useState(undefined)
    function handleBlur(event){
        props.listNameChange(props.id,currentListName)
    }
    function handleEnter(e){
        if(e.key==='Enter'){
          props.listNameChange(props.id,currentListName)
        }
    }
    return(
        <div className="list">
            
            <h2 
                className="list-name-element" >
                <input 
                    type="text" 
                    className="list-name-input" 
                    defaultValue={props.listName} 
                    onChange={(e)=>setCurrentListName(e.target.value)}
                    onBlur={handleBlur}
                    onKeyDown={handleEnter}
                >
                </input>
                <button onClick={()=>setClicked((click)=>!click)} >
                    <FaAngleDown />
                </button>
                <button ><MdOutlineDeleteForever className="delete-button" onClick={()=>props.deleteList(props.id)}/></button>
            </h2>
            
            {clicked && <ListItems 
                            listItems={props.list}   
                            listId={props.id}
                            listItemChange={props.listItemChange}
                            checkChange={props.checkChange}
                            addItem={props.addItem}
                            deleteItem={props.deleteItem}
                        />}
            
        </div>
    )
}
