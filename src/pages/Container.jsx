import React, {useEffect} from "react"
import  {useNavigate} from "react-router-dom"
import LeftBox from "./LeftBox"
import DisplayAppInfo from "./DisplayAppInfo"
import ChatInterface from "./ChatInterface"
import chatData from "../chatData"
import '../CSS/Chat.css'

export default function Container(props){
    let [selectedContact, setSelectedContact] = React.useState([])
    let [key, setKey] = React.useState([1]);
    const navigate = useNavigate();

    function changeName(selectedName, selectedImage){
        setSelectedContact([selectedName, selectedImage])
        console.log(selectedContact.length)
    }
    useEffect(() => {
        const keyDownHandler = event => {
          if (event.key === 'Escape') {
            event.preventDefault();
            setSelectedContact([])
          }
        };    
        document.addEventListener('keydown', keyDownHandler);
        return () => {
            document.removeEventListener('keydown', keyDownHandler);
          };
    }, []);

    function handleKeyDown(e) {
        e.target.style.height = 'inherit';
        e.target.style.height = `${e.target.scrollHeight}px`; 
        // In case you have a limitation
        e.target.style.height = `${Math.min(e.target.scrollHeight, 155)}px`;
      }
    return(
        <div className="container" onKeyDown={handleKeyDown}>
            <LeftBox chatData={chatData} handleClick={changeName}/>
            {selectedContact.length ? 
            <ChatInterface  contact={selectedContact}/> : 
            <DisplayAppInfo /> }
        </div>
    )
}