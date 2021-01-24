import React from "react";
import "./InputBox.scss"

const InputBox = (props) => {
    const {onChange, value, placeholder, type} = props;
    return (
        <div className="input-box">
            {type === "text-area" ?
                <textarea
                    className="input-field text-area"
                    placeholder={placeholder}
                    onChange={onChange}
                    value={value}
                />
                :
                <input
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