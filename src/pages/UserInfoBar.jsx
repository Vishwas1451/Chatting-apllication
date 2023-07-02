import React, { useState, useEffect } from "react"
import '../CSS/Chat.css'
import {useParams} from 'react-router-dom'
import data from '../chatData'

export default function UserInfoBar(props){
    const params = useParams()
    let [image, setImage] = React.useState([]);
    
    for(let i = 0; i< data.length ; i++ ) {
        if (data[i].name == params.employee) {
            useEffect(()=>{
                setImage([data[i].image]);
            }, [])
        }
    }
    return(
        <div className="user_info_bar">
            <img src={image} className="profile_pic" alt="Profile Pic"/>
            <h3 className="name">{params.employee}</h3>
            <img src="/images/chat.png" className="new_chat_logo" alt="New Chat logo"/>
            <img src="/images/menu.png" className="menu" alt="Menu"/>

        </div>
    )
}