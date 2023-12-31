import React, {  useContext } from "react";
import { useCookies } from "react-cookie";
import "../styles/header.css";
import linkdin from "../images/Linkedin-Logo.png";
import whatsap from "../images/WhatsApp.png";
import logo from "../images/logoKugel.png";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../App";

const Headline = () => {
  const [cookies,setCookies] = useCookies(["access_token"]);
  const navigate=useNavigate();
  const {setName,setPhone,name}=useContext(AppContext);

  const logout= ()=>{
      setCookies("n","");
      window.localStorage.removeItem("userID");
      setName(undefined);
      setPhone(undefined);
      navigate("/");
      
  }


  return (
    <>
      <header className="header">
        <div className="left-h">
          <div className="images">
            <a
              href="https://api.whatsapp.com/send?phone=972534224108"
              target="_blank"
            >
              <img className="what-logo" src={whatsap} alt="WhatsApp Logo" />
            </a>
            <a
              href="https://www.linkedin.com/in/shavitmor7/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="linkdin-logo" src={linkdin} alt="LinkedIn Logo" />
            </a>
          </div>
          <div>
            <h3 style={{ marginTop: "-7px" }}>Say Hi!</h3>
          </div>
          <div>
            {cookies.access_token ?
          (<h3 onClick={logout} style={{direction:"rtl", marginTop: "-7px",   cursor: "pointer"}}>
            יציאה</h3>)
            :
            (<h3 onClick={logout} style={{direction:"rtl", marginTop: "-7px",   cursor: "pointer"}}>
            הרשמה\התחברות</h3>)
          }
          </div>
        </div>

        <div className="middle-h">
          <h2 className="first-coteret">More Kugel מור קוגל</h2>
          <p
            className="second"
            style={{ direction: "rtl", marginBottom: "5px" }}
          >
            קוגל לשבת במחירים סטודנטיאלים :)
          </p>
        </div>

        <div className="right-h">
          <img className="logo" src={logo} alt="Kugel Logo" />
        </div>
      </header>
    </>
  );
};

export default Headline;
