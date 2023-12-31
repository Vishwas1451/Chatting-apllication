import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login"
import OTP from "./pages/OTP"
import Container from "./pages/Container"

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <header>
        <nav className="nav-2">
          <Link className="home-lin" to="/">CHAOS</Link>
          
          <Link className="home-link" to="/">Home</Link>
          <Link className="about-link" to="/about">About</Link>
          <Link className="contact-link" to="/contact">Contact</Link>
          </nav>
        </header> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/otp/:employee" element={<OTP />} /> 
          <Route path="/otp/:employee/chat" element={<Container />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
