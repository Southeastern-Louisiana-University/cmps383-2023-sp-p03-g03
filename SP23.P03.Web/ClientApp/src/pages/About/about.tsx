import React from 'react';
import { useNavigate} from 'react-router-dom';
import { routes } from '../../Routes/config';
import '../About/about.css';

export function AboutPage(): React.ReactElement {
    const navigate = useNavigate();
    return (
        
<body>
  <section className="about-us">
    <div className="about">
    <img src={require('../../assets/hammondstation.png')} className="pic" alt="hammond station"></img>
      <div className="text">
        <h2>About Us</h2>
        <h5><span  className='aboutspan'>Locomotive Transportation Company</span></h5>
        <div className='spacing'>
          <div className='textp'>
          Entrack is a global train transportation company that offers a seamless travel experience to customers all around the world. With a user-friendly website, customers can easily book their train journeys online and receive real-time updates on their trip status. Entrack offers a variety of classes ranging from economy to luxury, providing passengers with options that suit their budget and preferences. The company is also committed to sustainability and minimizing its carbon footprint by using energy-efficient trains and investing in green initiatives. Entrack has a wide network of partners and collaborators, enabling customers to travel to numerous destinations across the world with ease. With its commitment to customer satisfaction and sustainability, Entrack has quickly become a popular choice for train travel enthusiasts.
          </div>
          </div>
          <div>
          <center><button className="hire" onClick={() => {navigate(routes.home)}}>Home</button></center>
        </div>
      </div>
    </div>
  </section>
</body>


    );
}
