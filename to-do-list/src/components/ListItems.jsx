export default function ListItems({items}){
    console.log(items)
    const itemsComponents=items.map((item)=><li>{item}</li>)
    return(
    <ol> {itemsComponents}
</ol>
    )
   
}