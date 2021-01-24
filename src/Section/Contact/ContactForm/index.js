import React, {useState} from "react";
import "./ContactForm.scss";
import InputBox from "../../../Components/InputBox";
import PrimaryButton from "../../../Components/Buttons/PrimaryButton";

const ContactForm = () => {
    const [name, setName] = useState("");
    const onNameChange = (e) => {
        setName(e.value);
    };
    return (
        <div className="contact-form">
            <div className="title">
                Message Me
            </div>
            <div>
                <div className="input-width name-input">
                    <InputBox
                        value={name}
                        onChange={onNameChange}
                        placeholder="Name"
                    />
                </div>
                <div className="input-width">
                    <InputBox
                        value={name}
                        onChange={onNameChange}
                        placeholder="Email"
                    />
                </div>
                <div className="text-area-width">
                    <InputBox
                        value={name}
                        type="text-area"
                        onChange={onNameChange}
                        placeholder="Message"
                    />
                </div>
                <PrimaryButton
                    text="Send Message"
                    icon="fa fa-paper-plane"
                    className="margin-x-5"
                    onClick={()=>{}}
                />
            </div>
        </div>
    );
};

export default ContactForm