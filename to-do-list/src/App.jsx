import { useState } from 'react'
import Header from "./components/Header"
import Add from "./components/Add"
import Lists from "./components/Lists"
import './App.css'

/*lists={
  anime:["opm","jjk","OnePiece"]
}*/
function App() {
  const [lists,setLists]=useState([{"hobbys":["cricket","running","Movies"]},{"movies":["reze Arc","Spiderman : Across The Spiderverse","Ready or Not"]},{"anime":["OPM","Dandadan","prison School","kite"]}])
  const listsComponents=lists.map((listItem)=>{return (listItem==="" || listItem===undefined) ? null:<Lists {...listItem} />})
  const [adding,setAdding]=useState(false)
  console.log(lists)
  const [newListName,setNewListName]=useState(undefined)
  function addlist(){
    setAdding((adding)=> !adding)
  }
  function addingList(event){
    console.log({newListName:[]})
    if(newListName)  setLists([...lists,{[newListName]:[]}])
    setAdding(false)
  }
  function handleEnter(e){
    if(e.key==='Enter'){
      if(newListName)  setLists([...lists,{[newListName]:[]}])
      setAdding(false)
    }
  }
  return(
    <>
    <Header />
    <div className="list-body">
      {listsComponents}
      {adding ? <input type="text" className='List-input' name ="listname" value = {FormData.listname} onBlur={addingList}  onChange={(e)=>setNewListName(e.target.value)} onKeyDown={handleEnter} autoFocus></input>:null}
      <Add addList={addlist}/>
    </div>
    </>
  )

}

export default App
