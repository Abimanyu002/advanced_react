import { FaPlus } from "react-icons/fa";
import { MdOutlineDeleteForever } from "react-icons/md";

export default function ListItems({listItems,listId,listItemChange,checkChange,addItem,deleteItem}){
    const cross={textDecoration : "line-through"}
    const itemsComponents=listItems.map((item,index)=>
        
    <div key={item.id}>
        <input type="checkbox" onClick={()=>checkChange(listId,index)}></input>
        <input 
            style={item.isChecked ? cross  :null} 
            type="text" 
            className="list-item-input" 
            onChange={(e)=>listItemChange(listId,index,e.target.value)}
            defaultValue={item.listElement}
            onKeyDown={(e)=>{if(e.key==='Enter' && index===listItems.length-1){
                                            addItem(listId,"")
                                        }}
                                  }
            autoFocus>
        </input>
        <MdOutlineDeleteForever onClick={()=>deleteItem(listId,item.id)}/>
    </div>)
    return(
        <>
            <ul className="list-items"> 
                {itemsComponents}
                <button className="list-item-input" 
                        onClick={()=>addItem(listId,"")}>
                    <FaPlus />
                </button>
            </ul>

            
        </>
    )
   
}