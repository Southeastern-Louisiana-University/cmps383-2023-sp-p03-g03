import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Divider, Grid, Icon, Input, Segment } from "semantic-ui-react";
import { useUser } from "../../components/AuthProvider";
import { routes } from "../../Routes/config";
import "../Destinations/destinations-page.css";

export function DestinationsPage(): React.ReactElement {
  const navigate = useNavigate();
  const user = useUser();
  const [startDestination, setStartDestination] = useState("");
  const [endDestination, setEndDestination] = useState("");
  const [destinations, setDestinations] = useState<Destination[]>([]);
  //const [displayedDestinations, setDisplayedDestinations] = useState<Set<string>>(new Set());

  async function fetchDestinations() {
    try {
      const response = await axios.get("api/destinations");
      const data = response.data;
      setDestinations(data);
    } catch (error) {
      console.error(error);
    }
  }

  const filteredStartDestinations = destinations.filter((destination) =>
    destination.city.toLowerCase().includes(startDestination.toLowerCase())
  );
  const filteredEndDestinations = destinations.filter((destination) =>
    destination.city.toLowerCase().includes(endDestination.toLowerCase())
  );

//   function addDestinationToDisplay(destination: Destination){
//     if (!displayedDestinations.has(destination.city)){
//         setDisplayedDestinations(new Set(displayedDestinations).add(destination.city));
//         return true;
//     }
//     return false;
//   }

  return (
    <>
      <div className="destheader-box">
        <h2 className="destinationslogan">
          Let's Get {user?.userName ?? "You"} EnTrack
        </h2>
      </div>
      <div className="destinationcontainer-center">
        <div>
          <br></br>
        </div>
        <Segment padded raised className="destinationresizing">
          <Grid columns={2} stackable container textAlign="center">
            <Grid.Row>
              <Grid.Column>
                <h1 className="boxdesination-header"> Starting From: </h1>
                <Input
                  type="text"
                  name="destinations"
                  id="startDestination"
                  value={startDestination}
                  onChange={(e) => setStartDestination(e.target.value)}
                  placeholder="Enter Station"
                />
              </Grid.Column>

              <Divider vertical>
                <Icon name="arrow right" />
              </Divider>

              <Grid.Column>
                <h1 className="boxdesination-header"> Going To: </h1>
                <Input
                  type="text"
                  name="destinations"
                  id="endDestination"
                  value={endDestination}
                  onChange={(e) => setEndDestination(e.target.value)}
                  placeholder="Enter Station"
                />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <div className="destinationpadding">
                <div className="btndestination-center">
                  <button
                    className="btndestination-styling"
                    onClick={fetchDestinations}
                  >
                    Book Now!
                  </button>
                </div>
              </div>
              <ul>
                {filteredStartDestinations.map((destination) => (
                  <li key={destination.id}>{destination.city} {destination.state}</li>
                ))}
              </ul>
              <div> To: </div>
              <ul>
                {filteredEndDestinations.map((destination) => (
                  <li key={destination.id}>{destination.city} {destination.state}</li>
                ))}
              </ul>
              <div className="destinationpadding">
                <div className="btndestination-center">
                  <button
                    className="btndestination1-styling"
                    onClick={() => {
                      navigate(routes.home);
                    }}
                  >
                    Home
                  </button>
                </div>
              </div>
            </Grid.Row>
          </Grid>
        </Segment>
      </div>
    </>
  );
}
