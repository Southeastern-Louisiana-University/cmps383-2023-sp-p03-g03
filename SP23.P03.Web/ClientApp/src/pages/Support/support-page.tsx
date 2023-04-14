import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../Routes/config';
import '../Support/support-page.css'

export function SupportPage(): React.ReactElement {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleSendEmail = () => {
    const emailUrl = `mailto:EnTrackTeam3@gmail.com?subject=Support Request&body=Name:${name}%0D%0AEmail:${email}%0D%0ANumber:${phonenumber}%0D%0AMessage:${message}`;
    window.location.href = emailUrl;
  };

  return (
    <div>
      <body className='supportbody'>
        <div className="container">
          <div className="content">
            <div className="left-side">
              <div className="address details">
                <i className="fas fa-map-marker-alt"></i>
                <div className="topic">Address</div>
                <div className="text-one">404 NW Railroad Ave, Hammond</div>
                <div className="text-two">LA 70401</div>
              </div>
              <div className="phone details">
                <i className="fas fa-phone-alt"></i>
                <div className="topic">Phone</div>
                <div className="text-one">+219 356 7890</div>
                <div className="text-two">+219 356 7890</div>
              </div>
              <div className="email details">
                <i className="fas fa-envelope"></i>
                <div className="topic">Email</div>
                <div className="text-one">EnTrackTeam3@gmail.com</div>
                <div className="text-two"></div>
              </div>
            </div>
            <div className="right-side">
              <div className="topic-text">Send us a message</div>
              <p>If you have any questions please feel free to reach out to us about anything!</p>
              <form>
                <div className="input-box">
                  <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="input-box">
                  <input type="text" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="input-box">
                  <input type="text" placeholder="Enter your phone number" value={phonenumber} onChange={(e) => setNumber(e.target.value)} />
                </div>
                <div className="input-box message-box">
                  <textarea placeholder='Enter your message' value={message} onChange={(e) => setMessage(e.target.value)} />
                </div>
                <center>
                  <div className="button">
                    <input type="button" value="Send Now" onClick={handleSendEmail} />
                  </div>
                </center>
                <center>
                  <div className="button">
                    <input type="button" value="Home" onClick={() => { navigate(routes.home) }} />
                  </div>
                </center>
              </form>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}