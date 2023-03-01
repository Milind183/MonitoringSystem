import React from "react";
import './noticeCard.css'

export default function NoticeCard(prop){
  return(
  <div className="noticeCard">
    <div className="date">
      <ul>
        <li><p>{prop.day}{prop.date}</p></li>
        <li><p>{prop.time}</p></li>
      </ul>
    </div> 
    
    <div className="subject">
      <h2>{prop.subject}</h2>
    </div>

    <div className="content">
      <p>{prop.subject} paragraph of the notice which can be read only </p>
    </div>
  
  </div> 
  )
}
