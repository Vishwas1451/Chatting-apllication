import React from 'react'
import '../CSS/MessageBox.css'
function MessageBox(props) {
    if (props.para) {
        return (
            <div className='div2'>
            <div className='wait'>Chat with {props.para}</div>
            <input className="textbox" type = "text" placeholder="Type message here" ></input>
            </div>
            
        )
    }
    else {
        return (
            <div>
            <div className='div1'>
                <div className='welcome' >Welcome </div>
                <div className='to'>to</div>
                <div className='chaos'>CHAOS</div>
                
            </div>
            <h1 className='h1'>Click on contacts to chat with them :)</h1>
            </div>
          
  )
}
}

export default MessageBox