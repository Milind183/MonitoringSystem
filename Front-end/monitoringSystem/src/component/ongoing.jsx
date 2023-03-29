import React from "react";  
import { useState } from "react";
import './ongoing.css'
export default function OnGoing(){
  
  const [Subject,setSubject] = useState(""); 
  const [STime,setSTime] = useState("");
  const [ETime,setETime] = useState("");
  const [Day,setDay] = useState("");
 
  const pushThis = async (e)=>{
    e.preventDefault(); 

    const res = await fetch('http://127.0.0.1:3000/ongoing/createNewOngoing',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        Subject,STime,ETime,Day
      })
    })
    const data = res.json();
    
    if(res.status === 201){
      console.log("Done posting stuff")
    }
  }

  const showData = async (e) => {
    e.preventDefault();
     const res = await fetch('http://127.0.0.1:3000/ongoing/showOngoing')
      .then((res)=>res.json())
      .then((dat) => console.log(dat))
  }

  return(
    <>
    
    <div className="ongoin">
        <h1> Hello </h1>
    </div>

    <form>

      <input type="text" name="subject" value={Subject} placeholder="subject" onChange={(e)=>setSubject(e.target.value)}/>
      <input type="time" name="start-time" placeholder="time" value={STime} onChange={(e)=>setSTime(e.target.value)} />
      <input type="time" name="end-time" placeholder="time" value={ETime} onChange={(e)=>setETime(e.target.value)}/>
      <input type="text" name="day" placeholder="day" value={Day} onChange={(e)=>setDay(e.target.value)}/>
      <button type="submit" onClick={pushThis}> addclass </button>
    
      <div>
        <ul>
          <li> subject : </li>
        </ul>
        <button type="submit"onClick={showData}> Show data </button>
      </div>
    </form>
    </>
  )
}
