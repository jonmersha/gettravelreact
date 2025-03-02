import {MouseEvent, useState} from "react"
//{items}
interface Props{
  items:string[];
  headings:string;
  onSelectedItem:(item:string)=>void;
}
function Listview({items,headings,onSelectedItem}:Props){
  
  //const [items, headings]=props;
  const [selectedIndex,setSelectedIndex] =useState(-1)

    return (
      <>
        <h1>{headings}</h1>
        {items.length===0&&<p>No Items Found</p>}
      
        <ul className="list-group">
          {
  items.map((item,index)=>
  <li className={selectedIndex===index?'list-group-item active':'list-group-item'}
  key ={item} 
  onClick={()=>{setSelectedIndex(index);onSelectedItem(item)}}>{item}</li>)
          }
          </ul>
      </>
  
);

}

export default Listview;