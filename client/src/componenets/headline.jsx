import React from "react";
import "../styles/header.css";
import linkdin from "../images/Linkedin-Logo.png";
import whatsap from "../images/WhatsApp.png";
import logo from "../images/logoKugel.png";

const Headline = ({modal}) => {
  return (
    <>
      <div className="header">
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
          <h3 onClick={modal} style={{ marginTop: "-7px",   cursor: "pointer"}}>
            להזמנות קודמות!</h3>
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
      </div>
    </>
  );
};

export default Headline;
