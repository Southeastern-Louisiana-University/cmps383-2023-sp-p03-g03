import React from 'react';
import { useNavigate } from 'react-router-dom';
//import { useUser } from '../../components/AuthProvider';
import { Divider, Grid, Icon, Input, Segment } from 'semantic-ui-react';
import { useUser } from '../../components/AuthProvider';
import { routes } from '../../Routes/config';
import '../Destinations/destinations-page.css';

export function DestinationsPage(): React.ReactElement {
    const navigate = useNavigate();
    const user = useUser();

    return (
        
        <><div className="destheader-box">
            <h2 className="destinationslogan">
                Let's Get {user?.userName ?? "You"} EnTrack
            </h2>
        </div><div className="destinationcontainer-center">
                <div><br></br></div>
                <Segment padded raised className="destinationresizing">
                    <Grid columns={2} stackable container textAlign='center'>

                        <Grid.Row>
                            <Grid.Column>
                                <h1 className="boxdesination-header"> Starting From: </h1>
                                <Input type="text" placeholder="Enter Station" />
                            </Grid.Column>

                            <Divider vertical>
                                <Icon name="arrow right" />
                            </Divider>

                            <Grid.Column>
                                <h1 className="boxdesination-header"> Going To: </h1>
                                <Input type="text" placeholder="Enter Station" />
                            </Grid.Column>
                        </Grid.Row>

                        <Grid.Row>
                            <div className='destinationpadding'><div className="btndestination-center">
                                <button className="btndestination-styling">
                                    Book Now!
                                </button>
                                
                            </div></div>
                            <div className='destinationpadding'><div className="btndestination-center">
                                <button className="btndestination1-styling" onClick={() => {navigate(routes.home)}}>
                                    Home
                                </button>
                                
                            </div></div>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </div></>
    );
}