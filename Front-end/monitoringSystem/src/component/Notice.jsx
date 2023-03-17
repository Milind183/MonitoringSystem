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
    <section>

   
  <div className="notice-page">
    <div className="notice-heading">
      <h1>
        Notice 
      </h1>
    </div>
    <div className="notices">
      <NoticeCard {...prop[0]} />
      <NoticeCard {...prop[0]} />
      <NoticeCard {...prop[0]} />
    </div>
   
    </div>

    </section>
  )
}
