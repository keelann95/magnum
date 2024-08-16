// src/components/InputField.jsx
import React from 'react';

const InputField = ({
    type = "text",
    placeholder = "",
    value,
    onChange,
    className = "",
    ...rest
}) => {
    return (
        <div className="mb-4">
            <input
                type={type}
                placeholder={placeholder}
                className={`w-full px-3 py-2 border-b-2 border-[#ccc] focus:outline-none focus:border-red-500 ${className}`}
                value={value}
                onChange={onChange}
                
            />
        </div>
    );
};

export default InputField;