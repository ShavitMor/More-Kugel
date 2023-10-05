import React, { useState ,useContext} from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

import { AppContext } from "../App";


const Login = () => {
    const {setName,setPhone,name}=useContext(AppContext);

    const [_, setCookies] = useCookies(["access_token"]);
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const navigateToMain = () => {
      setName("");
      setPhone("");
      navigate('/main');
   };

    async function updatePhone(){
    try {
      const response = await fetch(`https://kugel-macher.onrender.com/auth/getClient?name=${name}`);
      const ans= await response.json();
      const phone=ans.user.phone;
      console.log(phone);
      setPhone(phone);
    } catch (error) {
     console.error("phone not updated after login");
    }
   }


    const handleSubmit = async (event) => {
      event.preventDefault();
  
      try {
        const result = await axios.post("https://kugel-macher.onrender.com/auth/login", {
          username: name,
          password,
        });
  
        setCookies("access_token", result.data.token);
        window.localStorage.setItem("userID", result.data.userID);

        if(result.data.userID){
          updatePhone();
          navigate("/main");
        }
        else{
        
        }

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
              value={name}
              onChange={(event) => setName(event.target.value)}
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