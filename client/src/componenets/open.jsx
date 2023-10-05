import React, { useState, useEffect, useContext } from "react";
import "../styles/open.css";
import MorEKUGELLL from "../images/lastLogo.png";
import Register from "../componenets/register";
import Login from "../componenets/login";
import { useCookies } from "react-cookie";
import { AppContext } from "../App";
import { ClipLoader } from 'react-spinners';

const Open = () => {
  const [showRegister, setShowRegister] = useState(true);
  const [showLogin, setShowLogin] = useState(false);

  const { products ,setName,setPhone,loading} = useContext(AppContext);

  const [cookies, setCookies] = useCookies(["access_token"]);

  useEffect(() => {
    // Move the refresh logic here, which runs once when the component is mounted
    const refresh = () => {
      setCookies("access_token", "");
      window.localStorage.removeItem("userID");
      products.forEach((product) => (product.quantity = 0));
      setName(undefined);
      setPhone(undefined);
    };

    refresh(); // Call the refresh function
  }, []); // Empty dependency array to run only on component mount

  const handleRegisterClick = () => {
    setShowRegister(true);
    setShowLogin(false);
  };

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowRegister(false);
  };

  return (
    <div className="start">
      <div className="logo_wrap">
        <div className="middle">
          <img className="openingLogo" src={MorEKUGELLL} alt="open Logo" />
        </div>
      </div>

      {loading ? (
      <div>
        <ClipLoader color="#007BFF" loading={loading} size={35} />
        <p>בטעינה...</p>
      </div>
    ) : 
     
     (
     <>
     <div className="nav-bar">
        <button className="register-open" onClick={handleRegisterClick}>
          הרשמה
        </button>
        <button className="register-open" onClick={handleLoginClick}>
          כניסה
        </button>
      </div>

      {showRegister && <Register />}
      {showLogin && <Login />}
      </>
     )
     }

    </div>
  );
};

export default Open;
