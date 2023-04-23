import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Divider, Grid, Icon, Segment } from "semantic-ui-react";
import { useUser } from "../../components/AuthProvider";
import { routes } from "../../Routes/config";
import "../Destinations/destinations-page.css";
import { DestinationPicker } from "../../components/DestinationPicker";

export function DestinationsPage(): React.ReactElement {
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
    <>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
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
    </>
  );
}
function setTrainRoutes(data: any) {
  throw new Error("Function not implemented.");
}

