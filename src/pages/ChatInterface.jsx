import React from "react"
import ReceiverInfo from "./ReceiverInfo"
import ChatWindow from "./ChatWindow"
import TextWindow from "./TextWindow"
import '../CSS/Chat.css'

export default function ChatInterface(props){
    return(
        <div className="chat_interface">
            <ReceiverInfo contact={props.contact}/>
            <ChatWindow />
            <TextWindow />
        </div>
    )
}