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
        <a href="/#">Entrack</a>
      </div>
      <ul>
        <li><button className='buttonhomenav' onClick={() => {navigate(routes.home)}}>Home</button></li>
        <li><button className='buttonhomenav' onClick={() => {navigate(routes.about)}}>About</button></li>
        <li><button className='buttonhomenav'>Destinations</button></li>
        <li><button className='buttonhomenav'>Tickets</button></li>
        <li><button className='buttonhomenav'>Rewards</button></li>
        <li><button className='buttonhomenav'>Support</button></li>
        <li><button className='buttonhomenav'>More</button></li>
      </ul>
    </div>
  </nav>
  <div className="img"></div>
  <div className="center">
    <div className="title">Come Coasting Today!</div>
    <div className="sub_title">Trips For Everyone</div>
    <div className="btns">
      <button onClick={() => {navigate(routes.login)}}>Sign-In</button>
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