import React, {useState} from 'react'
import { Link, useNavigate } from "react-router-dom"
import '../CSS/Login.css'
import data from './Contacts'

function Login() {
    const [username, handleUser] = useState({})
    const [password, handlePass] = useState({})
    const users = {}
    const names  = data.map(data => (
        users[data.userName] = data.password
    ))
    const navigate = useNavigate();
    function Click() {
        if ((document.getElementById("user").value) in users && users[document.getElementById("user").value] == document.getElementById("password").value ) {
            
            navigate(`/otp/${(document.getElementById("user").value)}`, { replace: true });
        }
        else{
            alert("Invalid user")
            navigate('/login', { replace: true });
        }

    }
  return (
    <div>
        <form className='login-form'>
            <p className='first-p-tag'>Enter Login Details</p>
            <label className='email-label'>Email &emsp;&nbsp;&nbsp;&nbsp;:</label>
            <input id="user" type='text'></input>
            <label className='password-label'>Password :</label>
            <input id="password" type='text' ></input>
            {/* <Link className="otp-button" to="/otp">Login</Link> */}
            <input className="otp-button" type='submit' onClick={Click}></input>
        </form>
        
    </div>
  )
}
export default Login