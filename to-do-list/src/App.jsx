import { useState } from 'react'
import Header from "./components/Header"
import Add from "./components/Add"
import Lists from "./components/Lists"
import './App.css'
import {listObject} from "./list.js"
import {nanoid} from "nanoid" 

function App() {
  const [lists,setLists]=useState(listObject)
  const listsComponents=lists.map((listItem)=>{return (listItem==="" || listItem===undefined) 
    ? null
    :<Lists 
    key ={nanoid()} 
    listItemChange={changeListItem} 
    listNameChange={changeListName} 
    checkChange={checkChange}
    addItem={addItem} 
    deleteItem={deleteItem}
    deleteList={deleteList}
    {...listItem} />})
  const [adding,setAdding]=useState(false)
  let newListName=undefined
  function addlist(){
    setAdding((adding)=> !adding)
  }
  function addNewListName(){
    if(newListName)  setLists([...lists,{id:lists.length+1,listName:newListName,list:[]}])
    setAdding(false)
  }
  function addingList(){
    console.log({newListName:[]})
    addNewListName()
  }
  function handleEnter(e){
    if(e.key==='Enter'){
      addNewListName()
    }
  }
  function changeListName(listId,newName){
    setLists((prevlist)=>prevlist.map(listsComponent=>{
      if(listsComponent.id===listId){
        return {...listsComponent,listName:newName}
      }
      else{
        return listsComponent
      }
    })
    )
    
  }
  function changeListItem(listId,itemId,newItem){
    setLists((prevlist)=>prevlist.map(listsComponent=>{
      if(listsComponent.id===listId){
        let newList=listsComponent.list
        newList[itemId]={...newList[itemId],listElement:newItem}
        return {...listsComponent,list:newList}
      }
      else{
        return listsComponent
      }
    }))
  }
  function checkChange(listId, itemId) {
    setLists((prevLists) =>
      prevLists.map((list) => {
        if (list.id === listId) {
        // Create a completely new array with the toggled item
          const updatedList = list.list.map((item, index) =>
            index === itemId 
              ? { ...item, isChecked: !item.isChecked }   // toggle
             : item
          );

          return {
            ...list,
            list: updatedList 
          };
        }
        return list;
      })
    );
  }
  function addItem(listId,newListItem){
    setLists(list=>
      list.map((listItem)=>{
        if(listId===listItem.id){
          let newItemList=[...listItem.list,{id:listItem.list.length+1,
                                             listElement:newListItem,
                                             isChecked:false}
                          ]
          return {...listItem,list:newItemList}
        }
        else{
          return listItem
        }
      })

    )
  }
  function deleteItem(listId,itemId){
    setLists((prevLists) =>
      prevLists.map((list) => {
        if (list.id === listId) {
          const updatedList =list.list.filter(item =>item.id!==itemId)
          return {
            ...list,
            list: updatedList 
          };
        }
        return list;
      })
    );
  }
  function deleteList(listId){
    setLists(prevLists=>
      prevLists.filter(listItem=>listItem.id!==listId)
    )
  }

  return(
    <>
    <Header />
    <div className="list-body">
      {listsComponents}
      {adding ? <input type="text" className='list-input' name ="listname" value = {FormData.listname} onBlur={addingList}  onChange={(e)=>newListName=e.target.value} onKeyDown={handleEnter} autoFocus></input>:null}
      <Add  addList={addlist}/>
    </div>
    </>
  )

}

export default App
