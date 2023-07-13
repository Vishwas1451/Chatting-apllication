import React from "react"
import '../CSS/Chat.css'

export default function Searchbar(props){
    const handleChange = (event) => {   
        event.preventDefault();
        props.handleContacts(event.target.value)
        // console.log(message)
      };
    return(
        <div className="search_bar">
            <div>
                <img src="/images/search.png" alt="Search logo" />
                <input className="search" placeholder="Search or start new chat" onChange={handleChange}/>
            </div>
        </div>
    )
}