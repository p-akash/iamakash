import React, {useState} from "react";
import "./ContactForm.scss";
import InputBox from "../../../Components/InputBox";
import PrimaryButton from "../../../Components/Buttons/PrimaryButton";

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message:"" });
    const handleInputChange = e => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const onSubmitForm = () =>{}
    return (
        <div className="contact-form">
            <div className="title">
                Message Me
            </div>
            <div>
                <div className="input-width name-input">
                    <InputBox
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Name"
                    />
                </div>
                <div className="input-width">
                    <InputBox
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Email"
                    />
                </div>
                <div className="text-area-width">
                    <InputBox
                        name="message"
                        value={formData.message}
                        type="text-area"
                        onChange={handleInputChange}
                        placeholder="Message"
                    />
                </div>
                <PrimaryButton
                    text="Send Message"
                    icon="fa fa-paper-plane"
                    className="cursor-pointer"
                    onClick={onSubmitForm}
                />
            </div>
        </div>
    );
};

export default ContactForm