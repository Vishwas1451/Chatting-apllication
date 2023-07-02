import React from "react"
import '../CSS/Chat.css'

export default function Chatlist(props){
    let chatDataArray = props.chatData.map((chat, index) => {
        return (
            <div className="contact" onClick={()=>props.handleClick(chat.name, chat.image)} key={index}>
                <img src={chat.image} alt="User Profile Pic"/>
                <h4 className="name">{chat.name}</h4>
            </div>
        )
    })
    return(
        <div className="chat_list">
            {chatDataArray}
            {/* <h1>Yo wassup</h1> */}
        </div>
    )
}