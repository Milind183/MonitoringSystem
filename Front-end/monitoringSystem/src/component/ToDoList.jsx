import { useState } from 'react';
import ListItem from './ListItem';
import './toDoList.css';

export default function ToDoList(){ 
  
  const [inputList,setInputList] = useState([]);
  const [Items,setItems] = useState([]);

  const itemEvent=(event)=>{
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems)=>{
      return [...oldItems,inputList];
    });
    setInputList(" ");
  };

  const deletItme = (index) => {
      setItems((oldItems)=>{
      return oldItems.filter((aryele,id) => {
        return index !== id
      })
    })
  }

  return(

    <section id='todo'>
    <div className="toDoList">
      
      <div className="todo-heading">
        <h1> To-Do List</h1>
      </div>
      
      <div className='todo-input'>
        <input type="text" value={inputList} placeholder='Add Task' onChange={itemEvent} required={true}></input>
        <button type='submit' onClick={listOfItems} > + </button>
      </div> 
      <div className='todo-list-item'>
        <ol>
          {Items.map((itemval,index) => {
            
            if( itemval !== " "){
            return <ListItem 
                   key={index}
                   id={index}
                   text={itemval}
                   onSelect={deletItme} />
                } 
              })
          }
        </ol>
      </div>
    </div>
    </section>
  );
}
