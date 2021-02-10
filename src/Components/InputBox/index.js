import React from "react";
import "./InputBox.scss"

const InputBox = (props) => {
    const {name, onChange, value, placeholder, type, className} = props;
    return (
        <div className="input-box">
            {type === "text-area" ?
                <textarea
                    autoComplete="off"
                    name={name}
                    className={`input-field text-area ${className}`}
                    placeholder={placeholder}
                    onChange={onChange}
                    value={value}
                />
                :
                <input
                    name={name}
                    className={`input-field ${className}`}
                    placeholder={placeholder}
                    type="text"
                    onChange={onChange}
                    value={value}
                />
            }


        </div>
    );
};

export default React.memo(InputBox);