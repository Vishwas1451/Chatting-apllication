import React from "react"
import UserInfoBar from "./UserInfoBar"
import Searchbar from "./Searchbar"
import Chatlist from "./Chatlist"
import '../CSS/Chat.css'

export default function Leftbox(props){
    let [displayContact, setDisplayContact] = React.useState([])
    function display(selectedContact){
        setDisplayContact([selectedContact])
        // console.log(displayContact.length)
        console.log(displayContact)
    }
    return(
        <div className="leftbox">
            <UserInfoBar />
            <div className="search_chatlist">
                <Searchbar chatData={props.chatData} handleContacts={display}/>
                <Chatlist chatData={props.chatData} handleClick={props.handleClick} disp = {displayContact}/>
            </div>
        </div>
    )
}