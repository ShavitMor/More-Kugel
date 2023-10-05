import React, { useState,useContext } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../App";

const Register = () => {
    const {setName,setPhone}=useContext(AppContext);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [phone1, setPhone1] = useState("");

    const [_, setCookies] = useCookies(["access_token"]);
    const navigate = useNavigate();
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        await axios.post("https://kugel-macher.onrender.com/auth/register", {
          name: username,
          password: password,
          phone:phone1
        });
        alert("Registration Completed! Now login.");
      } catch (error) {
        console.error(error);
      }
    };
  
  const navigateToMain = () => {
    setName("");
    setPhone("");
    navigate('/main');
  };

    return (
      <div className="auth-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              id="username"
              className="cool-input"
              placeholder="שם"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              id="password"
              className="cool-input"
              placeholder="ססמא"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              id="phone"
              className="cool-input"
              placeholder="טלפון"
              value={phone1}
              onChange={(event) => setPhone1(event.target.value)}
            />
          </div>
          <button type="submit">הירשם</button>

        </form>
        <button className="guest" onClick={navigateToMain}>המשך כאורח</button>

      </div>
    );
}


export default Register;