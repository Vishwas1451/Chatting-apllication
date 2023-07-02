import React from "react"
import '../CSS/Chat.css'

export default function Searchbar(){
    return(
        <div className="search_bar">
            <div>
                <img src="/images/search.png" alt="Search logo" />
                <input className="search" placeholder="Search or start new chat"/>
            </div>
        </div>
    )
}