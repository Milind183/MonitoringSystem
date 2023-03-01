import React from "react"
import './toDoList.css'

export default function ListItem(prop){
  return (
  <div className='item'>
    <li>{prop.text}</li>
    <button onClick={()=>{
     prop.onSelect(prop.id)} 
    }>X
      </button>
  </div>)
}
