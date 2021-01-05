import React from "react";
import DesktopNavbar from "./DesktopNavbar";
import {Grid, Segment} from "semantic-ui-react";
import "./Navbar.scss";

const Navbar = () => {
    return (
        <div className="navbar">
            <Segment>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            Akash
                        </Grid.Column>
                        <Grid.Column width={13} only='tablet computer'>
                            <DesktopNavbar/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        </div>
    );
};

export default Navbar;