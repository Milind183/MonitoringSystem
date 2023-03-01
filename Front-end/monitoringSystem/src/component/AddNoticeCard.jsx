import React from "react"
import './addCardNotice.css'
export default function AddNoticeCard(){

    return (
      <div className="addCard">
        <input className="addCard-date"></input>
        <input className="addCard-subject"></input>
        <input className="addCard-para"></input>
      </div>
    )
}
