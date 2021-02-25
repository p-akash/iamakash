import React from "react";
import "./Card.scss";
import Image from "../../assets/images/large-bg.jpg"
const Card = () => {
    return (
        <div className="card">
            <img src={Image} alt="portfolio-imag"/>
            <div className="card-heading">
                NeoBenk
            </div>
            <div className="card-sub-heading">
                Website
            </div>
            <div className="card-external-link">
               <div className="text">
                   neobenk.com
               </div>
                <div className="icon">
                     <i className="fa fa-external-link"/>
                </div>
            </div>
        </div>
    );

};

export default Card;