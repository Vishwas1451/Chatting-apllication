import React from "react"
import '../CSS/Chat.css'

export default function ReceiverInfo(props){
    return(
        <div className="receiver_info">
            <img src={`${props.contact[1]}`} className="profile_pic" alt="Profile Pic"/>
            <h3 className="name">{props.contact[0]}</h3>
        </div>
    )
}