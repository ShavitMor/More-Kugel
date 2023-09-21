import React, { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [_, setCookies] = useCookies(["access_token"]);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    const navigate = useNavigate();
  
    const navigateToMain = () => {
      navigate('/main');
   };

   
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      try {
        // const result = await axios.post("http://localhost:3001/auth/login", {
        //   username,
        //   password,
        // });
  
        // setCookies("access_token", result.data.token);
        // window.localStorage.setItem("userID", result.data.userID);
        // navigate("/");
      } catch (error) {
        console.error(error);
      }
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
          <button type="submit">כנס</button>
         

        </form>
        <button className="guest" onClick={navigateToMain}>המשך כאורח</button>
      </div>
      
    );
}

export default Login;