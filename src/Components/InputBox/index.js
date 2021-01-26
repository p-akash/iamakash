import React from "react";
import "./InputBox.scss"

const InputBox = (props) => {
    const {name, onChange, value, placeholder, type} = props;
    return (
        <div className="input-box">
            {type === "text-area" ?
                <textarea
                    name={name}
                    className="input-field text-area"
                    placeholder={placeholder}
                    onChange={onChange}
                    value={value}
                />
                :
                <input
                    name={name}
                    className="input-field"
                    placeholder={placeholder} type="text"
                    onChange={onChange}
                    value={value}
                />
            }


        </div>
    );
};

export default InputBox;