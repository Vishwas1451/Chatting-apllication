import React, {useState} from 'react'
import { Link, useNavigate } from "react-router-dom"
import '../CSS/Login.css'
import data from '../chatData'

function Login() {
    const users = {}
    const names  = data.map(data => (
        users[data.name] = data.pass
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
            <label className='email-label'>Username :</label>
            <input id="user" type='text'></input>
            <label className='password-label'>Password &nbsp;:</label>
            <input id="password" type='password' ></input>
            {/* <Link className="otp-button" to="/otp">Login</Link> */}
            <input className="otp-button" type='submit' onClick={Click}></input>
        </form>
        
    </div>
  )
}
export default Login