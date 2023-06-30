import React, {useState} from "react"
import { Link, useParams } from "react-router-dom"
import Contacts from "./Contacts"
import Image from "./Image"
import MessageBox from "./MessageBox"
// import img1 from '../assets/bg_pic.png'
import '../CSS/User.css'

export default function User(){
    const params = useParams();
    // const {ID , setId} = React.useState([])
    const contactElements = Contacts.map(place => (
        <div >
            {place.userName!=params.employee && (
                <div>
                <Link className="link-underline"to={`/otp/${params.employee}/chat/` + place.userName}>
                <div className="travel">
                <Image im={place.images} />
                <h5 className="place-username">{place.userName}</h5>    
                </div>  
                </Link>           
                <hr></hr>
                </div>
        )} 
            
        </div>
    ))
    const headerElements = Contacts.map(places => (
        <div>
         {places.userName==params.employee && (
            <Link className="link-underline"to={`/otp/${params.employee}/chat/`}>
            <div  className="heads">            
            <img className = "imag2" src={places.images} width="70px" />
            <h5 className="places-username">{places.userName}</h5>           
            </div>
            </Link>

        )}           
        </div>
    ))

    return(
        <div className="full-side">        
            <div className="left-side">
            <div >
            {headerElements}
            </div>

            <div >
               {contactElements}
            </div>
            </div>
            <div className="right-side">
            <MessageBox para={params.contact}/>
            </div>
            
        </div>
    )
}