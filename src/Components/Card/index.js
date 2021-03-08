import React from "react";
import "./Card.scss";
const Card = ({portfolio, onImageClick}) => {
    console.log(portfolio.objectFit);
    return (
        <div className="card">
            <img src={portfolio.img} style={{objectPosition:portfolio.objectFit}} alt="portfolio-img" onClick={()=>onImageClick()}/>
            <div className="card-text">
                <div className="card-heading">
                    {portfolio.projectName}
                </div>
                <div className="card-sub-heading">
                    {portfolio.projectType}
                </div>
                { portfolio.externalLink1Link &&
                <div className="card-external-link" onClick={()=>window.open(portfolio.externalLink1Link, "_blank")}>
                    <div className="text">
                        {portfolio.externalLink1text}
                    </div>
                    <div className="icon">
                        <i className="fa fa-external-link"/>
                    </div>
                </div>
                }
                {portfolio.externalLink2Link &&
                <div className="card-external-link" onClick={()=>window.open(portfolio.externalLink2Link, "_blank")}>
                    <div className="text">
                        {portfolio.externalLink2text}
                    </div>
                    <div className="icon">
                        <i className="fa fa-external-link"/>
                    </div>
                </div>
                }
            </div>
        </div>
    );

};

export default React.memo(Card);