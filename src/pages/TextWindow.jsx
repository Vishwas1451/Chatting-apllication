import React from "react"
import '../CSS/Chat.css'

export default function TextWindow(){
    // document.getElementById('#autoresizing').on('input', function () {
    //     this.style.height = 'auto';

    //     this.style.height =
    //         (this.scrollHeight) + 'px';
    // });
    function handleKeyDown(e) {
        e.target.style.height = 'inherit';
        e.target.style.height = `${e.target.scrollHeight}px`; 
        // In case you have a limitation
        e.target.style.height = `${Math.min(e.target.scrollHeight, 5)}em`;
        console.log(e.target.scrollHeight)
      }
    return(
        <footer>
        <div className="text_window" >
            <img className="smiley" src="/images/smiley.png"/>
            <img className="attach" src="/images/attach.png"/>
            <textarea id = "autoresizing" className="message_box" placeholder="Type a message" onKeyDown={handleKeyDown}  ></textarea>
            <img className="send" src="/images/send.png"/>
        </div>
        </footer>
        
    )
}