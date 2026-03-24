import { FaPlus } from "react-icons/fa";

export default function Add(props){
    return(
        <button className="add-button" onClick={()=>props.addList()}>
            <FaPlus />
        </button>
    )
}