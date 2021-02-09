import React from "react";
import checkMark from "../../assets/images/check-mark.svg"
import Div100vh from "react-div-100vh";
import "./Modal.scss"

const Modal = (props) => {
    const {visible} = props
    return (
        <Div100vh id="myModal" className="modal" style={{display: `${visible ? "block" : "none"}`}}>
            <div className="modal-content">
                <div className="modal-header">
                    <img src={checkMark} width="50px" height="50%" alt="success"/>
                </div>
                <div className="modal-body">
                    <h2 className="modal-title">Thank you!</h2>
                    <h6 className="modal-message">I will be getting back to you shortly.</h6>
                </div>
            </div>
        </Div100vh>

    );
};

export default Modal;