import React from 'react';

interface Props {
    value: string;
    setValue: () => void;
    label: string;
    id: string;
    required?: boolean;
    type?: 'text' | 'email' | 'password' | 'number' | 'tel';
    inputMode?: 'text' | 'numeric' | 'decimal' | 'tel' | 'email';
    pattern?: RegExp;
}

const LooseYourTimeInput: React.FC<Props> = ({value, setValue, label, id, required, type="text", inputMode="text", pattern=/^.+$/}) => {
    return (
        <div className="user-box">
            <input
                type={type}
                inputMode={inputMode}
                id={id}
                name={id}
                value={value}
                onChange={setValue}
                required={required}
                pattern={pattern.source}
            />
            <label htmlFor={id}>
                {label}
            </label>
        </div>
    );
};

export default LooseYourTimeInput;