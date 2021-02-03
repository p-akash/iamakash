import React, {useState} from "react";
import "./ContactForm.scss";
import InputBox from "../../../Components/InputBox";
import PrimaryButton from "../../../Components/Buttons/PrimaryButton";

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message:"" });
    const [validationError, setValidationError] = useState({ name: "", email: "", message:"" });

    const validation = () =>{
        setValidationError({ name: "", email: "", message:"" });
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let isValid= true;
        if(formData.name === ""){
            setValidationError(prevState =>({
                ...prevState,
                name: "Your name please!"
            }))
            isValid = false;
        }
        if(formData.email === ""){
            setValidationError(prevState => ({
                ...prevState,
                email: "Your email please!"
            }))
            isValid = false;
        } else if (!re.test(String(formData.email).toLowerCase())){
            setFormData(prevState => ({
                ...prevState,
                email: ""
            }));
            setValidationError(prevState => ({
                ...prevState,
                email: "Valid email please!"
            }))
            isValid = false;
        }
        if(formData.message === ""){
            setValidationError(prevState => ({
                ...prevState,
                message: "Your message please!"
            }))
            isValid = false;
        }
        return isValid
    };
    const handleInputChange = e => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
        if(formData[name] !== ""){
            setValidationError(prevState =>({
                ...prevState,
                [name]: ""
            }))
        }
    };
    const onSubmitForm = () =>{
        const isEmpty = validation();
        if(isEmpty){
            console.log("form Submited")
        }

    }
    return (
        <div className="contact-form">
            <div className="title">
                Message Me
            </div>
            <div>
                <div className="input-width name-input">
                    <InputBox
                        name="name"
                        className={`${validationError.name && "input-error"}`}
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder={validationError.name || "Name"}
                    />
                </div>
                <div className="input-width">
                    <InputBox
                        name="email"
                        value={formData.email}
                        className={`${validationError.email && "input-error"}`}
                        onChange={handleInputChange}
                        placeholder={validationError.email || "Email"}
                    />
                </div>
                <div className="text-area-width">
                    <InputBox
                        name="message"
                        value={formData.message}
                        className={`${validationError.message && "input-error"}`}
                        type="text-area"
                        onChange={handleInputChange}
                        placeholder={validationError.message || "Message"}
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