import React from "react";
import NoticeCard from "./NoticeCard";
import './notice.css'
import prop from './noticeData.js'

export default function Notice(){

  function getTitle(e){
    console.log(e.target.value)
  }
  function getContent(e){
    console.log(e.target.value)
  }

  async function addNotice(e){
    e.preventDefault()  
  }

  return(
  <div className="notice-page">
    <div className="notice-heading">
      <h1>
        Notice <button type="submit">+</button>
      </h1>
    </div>
    <div className="notices">
      <NoticeCard {...prop[0]} />
      <NoticeCard {...prop[0]} />
      <NoticeCard {...prop[0]} />
    </div>

    <form action="http://localhost:3000/notice/data" method="post"  className="addNotice">
      <input type="text" name="title" placeholder="title" onChange={getTitle}/>
      <input type="text" name="content" placeholder="content" onChange={getContent}/>
      <button type="submit" onClick={addNotice}> ADD </button>
    </form>
    
    </div>
  )
}
