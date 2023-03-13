import React from 'react';
import { useNavigate} from 'react-router-dom';
import { routes } from '../../Routes/config';
import '../Home/home-page.css';


export function HomePage(): React.ReactElement {
    const navigate = useNavigate();
    return (
        
<body>
  <nav>
    <div className="menu">
      <div className="logo">
        <a href="#">Entrack</a>
      </div>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Feedback</a></li>
      </ul>
    </div>
  </nav>
  <div className="img"></div>
  <div className="center">
    <div className="title">Come Coasting Today!</div>
    <div className="sub_title">Trips For Everyone</div>
    <div className="btns">
      <button>Sign-In</button>
      <button onClick={() => {navigate(routes.signup)}}>Sign-Up</button>
    </div>
  </div>
</body>

    );
}





/// <div>
/// <div>Home Page</div>
/// <button onClick={() => {navigate('*')}}>
///     not found
/// </button>
/// <button onClick={() => {navigate(routes.signup)}}>
///     SignUp Page
/// </button>
/// </div>