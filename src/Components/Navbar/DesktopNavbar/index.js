import React,{useState} from "react";
import {Menu} from "semantic-ui-react";
import "./DesktopNavbar.scss";

const DesktopNavbar = () => {
    const [activeItem, setActiveItem] = useState("home")
    return (
        <div className="desktop-navbar">
                <Menu pointing secondary>
                    <Menu.Menu position="right">
                        <Menu.Item
                            name='home'
                            active={activeItem === 'home'}
                            onClick={()=>setActiveItem("home")}
                        />
                        <Menu.Item
                            name='messages'
                            active={activeItem === 'messages'}
                            onClick={()=> setActiveItem("messages")}
                        />
                        <Menu.Item
                            name='friends'
                            active={activeItem === 'friends'}
                            onClick={()=>setActiveItem("friends")}
                        />
                    </Menu.Menu>
                </Menu>
        </div>

    );
};

export default DesktopNavbar;