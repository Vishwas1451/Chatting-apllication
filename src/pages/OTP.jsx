import React from "react";
import { useNavigate } from "react-router-dom"
import '../CSS/OTP.css'

function OTP() {
  const navigate = useNavigate();
    function Click() {
        if (document.getElementById("otp").value == "696969") {
            navigate(window.location.pathname +'/chat', { replace: true });
        }
        else{
            alert("Invalid otp")
            navigate(window.location.pathname, { replace: true });
        }

  }
  return (
    <div>
      <form className="login-form">
        <p className="first-p-tag">OTP Details</p>
        <label className="password-label">Enter OTP :</label>
        <input id='otp' type="password"></input>
        <button className="send-otp">Send OTP</button>
        <button className="send-otp-2" onClick={Click}>Verify</button>
       
      </form>
    </div>
  );
}

export default OTP;
