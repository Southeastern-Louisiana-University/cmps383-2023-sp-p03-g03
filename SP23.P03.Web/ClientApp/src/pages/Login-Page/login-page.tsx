import React from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "../../Routes/config";
import '../Login-Page/login-page.css';


export function LoginPage(): React.ReactElement {
    const navigate = useNavigate();
    return(
        <body>
    <div className="container">
      <div className="wrapper">
        <div className="loginwrapper-title"><span>Entrack Login</span></div>
        <form action="#">
          <div className="row">
            <i className="fas fa-user"></i>
            <input type="text" placeholder="Email or Phone" required></input>
          </div>
          <div className="row">
            <i className="fas fa-lock"></i>
            <input type="password" placeholder="Password" required></input>
          </div>
          <div className="pass"><a href="/#">Forgot password?</a></div>
          <div className="row button">
            <input type="submit" value="Login"></input>
          </div>
          <div>
          <center><button className="buttonsloginpage" onClick={() => {navigate(routes.home)}}>Home</button></center>
        </div>
          <div className="signup4login-link">Not a member? <a href="/SignUp">Signup now</a></div>      
        </form>
      </div>
    </div>
  </body>
    );

};