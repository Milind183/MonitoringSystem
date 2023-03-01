import React from "react";
import NoticeCard from "./NoticeCard";
import './notice.css'
import prop from './noticeData.js'

export default function Notice(){
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
    </div>
  )
}
