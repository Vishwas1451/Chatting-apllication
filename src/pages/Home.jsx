import React from "react"
import { Link } from "react-router-dom"
import '../CSS/Home.css'


function Home() {
  return (
    <div>
        <div className="home">Welcome to CHAOS</div>
        <div className="div">
            <Link className="login-link" to='/login'>Login</Link>
            <Link className="signup-link" to='/signup'>Sign Up</Link>
        </div>
    </div>
  )
}

export default Home