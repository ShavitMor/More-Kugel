import React, { useState } from "react";
import "../styles/open.css";
import logo from "../images/openImage.png";
import Register from "../componenets/register";
import Login from "../componenets/login";

const Open = () => {
  const [showRegister, setShowRegister] = useState(true);
  const [showLogin, setShowLogin] = useState(false);

  const handleRegisterClick = () => {
    setShowRegister(true);
    setShowLogin(false);
  };

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowRegister(false);
  };

  return (
    <div className='start'>
        <div className='logo_wrap'>
        <div className="middle-h">
          <h2 className="first-coteret">More Kugel</h2>
          </div>
        </div>    

        <div className="nav-bar">
        <button className="register-open" onClick={handleRegisterClick}>הרשמה</button>
        <button className="register-open" onClick={handleLoginClick}>כניסה</button>
        </div>

      {showRegister && <Register />}
      {showLogin && <Login />}

      <div className="tmuna">
        
      </div>
    </div>
  )
}


export default Open;
