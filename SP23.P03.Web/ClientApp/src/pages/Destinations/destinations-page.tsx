import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Divider, Grid, Icon, Input, Segment } from "semantic-ui-react";
import { useUser } from "../../components/AuthProvider";
import { routes } from "../../Routes/config";
import "../Destinations/destinations-page.css";
import { DestinationPicker } from "../../components/DestinationPicker";

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
    <><head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </head><>
        <div className="destheader-box">
          <h2 className="destinationslogan">
            Let's Get {user?.userName ?? "You"} EnTrack
          </h2>
          <div>
          </div>
        </div>
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
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <Icon name="map marker alternate" />
                      <Input
                        type="text"
                        name="destinations"
                        id="startDestination"
                        value={startDestination}
                        onChange={(e) => setStartDestination(e.target.value)}
                        placeholder="Enter Station"
                        className="destinations" />
                    </div>
                    <Divider vertical>
                      <Icon name="arrow right" />
                    </Divider>
                    <div style={{ display: "flex", alignItems: "center", paddingRight: "25px" }}>
                      <Icon name="map marker alternate" />
                      <Input
                        type="text"
                        name="destinations"
                        id="endDestination"
                        value={endDestination}
                        onChange={(e) => setEndDestination(e.target.value)}
                        placeholder="Enter Station"
                        className="myInput" />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: "2px",
                      }}
                    >
                      <Icon name="calendar alternate outline" />
                      <Input type="date" id="start-date" name="start-date" />
                      <Icon name="arrow right" />
                      <Input type="date" id="end-date" name="end-date" />
                      <Icon name="calendar alternate outline" />
                    </div>
                  </div>
                </Grid.Column>
              </Grid.Row>
              <div>
                <DestinationPicker title={"Start"}/>
                <DestinationPicker title={"End"}/>
                </div>

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
                    <li key={destination.id}>
                      {destination.city} {destination.state}
                    </li>
                  ))}
                </ul>
                <ul>
                  {filteredEndDestinations.map((destination) => (
                    <li key={destination.id}>
                      {destination.city} {destination.state}
                    </li>
                  ))}
                </ul>
                <div className="destinationpadding">
                  <div className="btndestination-center">
                    <button
                      className="btndestination1-styling"
                      onClick={() => {
                        navigate(routes.home);
                      } }
                    >
                      Home
                    </button>
                  </div>
                </div>
              </Grid.Row>
            </Grid>
          </Segment>
        </div>
      </></>
  );
}
