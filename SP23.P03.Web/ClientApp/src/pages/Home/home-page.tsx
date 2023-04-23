import React, { useEffect } from 'react';
import { useNavigate} from 'react-router-dom';
import { routes } from '../../Routes/config';
import '../Home/home-page.css';
import { Divider, Grid, Icon, Segment } from 'semantic-ui-react';
import { DestinationPicker } from '../../components/DestinationPicker';
import axios from 'axios';
import { useUser } from '../../components/AuthProvider';

export function HomePage(): React.ReactElement {
  const navigate = useNavigate();
  const user = useUser();

 async function fetchRoutes() {
    try {
      const response = await axios.get("api/trainroutes");
      const data = response.data;
      setTrainRoutes(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchRoutes();
  }, []);

    return (
      <><head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head><body className='train'>
          <nav>
            <div className="menu">
              <div className="logo">
                <a href="/#">EnTrack</a>
              </div>
              <ul>
              <li><button className='btn btn-4' onClick={() => { navigate(routes.signup); } }>Sign-Up</button></li>
              <li><button className='btn btn-6' style={{ marginRight: '320px' }} onClick={() => { navigate(routes.login); } }>Login</button></li>
                <li><button className='btn btn-4' onClick={() => { navigate(routes.home); } }>Home</button></li>
                <li><button className='btn btn-4' onClick={() => { navigate(routes.about); } }>About</button></li>
                <li><button className='btn btn-4' onClick={() => { navigate(routes.tickets); } }>Tickets</button></li>
                <li><button className='btn btn-4' onClick={() => { navigate(routes.rewards); } }>Rewards</button></li>
                <li><button className='btn btn-4' onClick={() => { navigate(routes.support); } }>Contact Us</button></li>
              </ul>
            </div>
          </nav>
          <div> &nbsp; </div><div> &nbsp; </div>
          <div> &nbsp;</div><div> &nbsp; </div>
          <div> &nbsp; </div><div> &nbsp; </div>
          <div> &nbsp; </div><div> &nbsp; </div>
          <div> &nbsp; </div><div> &nbsp; </div>

      
          <div className="center">
          </div>


          <h2 className="destinationslogan">
            Let's Get {user?.userName ?? "You"} EnTrack
          </h2>

        <div className="destinationcontainer-center">
          <div>
            <br></br>
          </div>
          <Segment padded raised className="destinationresizing">
            <Grid columns={2} stackable container textAlign="center">
              <Grid.Row>
                <Grid.Column>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    <Divider vertical>
                      <Icon name="arrow right" />
                    </Divider>
                  </div>
                </Grid.Column>
              </Grid.Row>
              <div>
                <DestinationPicker title={"Start"} />
                <DestinationPicker title={"End"} />
              </div>

              <Grid.Row>
                <div className="destinationpadding">
                  <div className="btndestination-center">
                    <button
                      className="btndestination-styling"
                      onClick={fetchRoutes}
                    >
                      Book Now!
                    </button>
                  </div>
                </div>
                <div className="destinationpadding">
                  <div className="btndestination-center">
                  </div>
                </div>
              </Grid.Row>
            </Grid>
          </Segment>
        </div>
        </body></>

    );
}
function setTrainRoutes(data: any) {
  throw new Error('Function not implemented.');
}

