import React from "react"
import UserInfoBar from "./UserInfoBar"
import Searchbar from "./Searchbar"
import Chatlist from "./Chatlist"
import '../CSS/Chat.css'

export default function Leftbox(props){
    return(
        <div className="leftbox">
            <UserInfoBar />
            <div className="search_chatlist">
                <Searchbar />
                <Chatlist chatData={props.chatData} handleClick={props.handleClick} />
            </div>
        </div>
    )
}