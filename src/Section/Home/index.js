import React from "react";
import "./Home.scss"
import {Visibility} from "semantic-ui-react";

const Home = ({setActiveItem}) => {
    return (
        <Visibility onBottomVisible={()=>{setActiveItem('about')}}>
            <section id="home" className="home-section">
                Home
            </section>
        </Visibility>
    );
};
export default Home;