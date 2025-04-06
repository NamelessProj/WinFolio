import React from 'react';
import LooseYourTimeInput from "@/components/LooseYourTime/LooseYourTimeInput";
import {formItem} from "@/utils/interfaces";

interface Props {
    name: string;
    namePattern: RegExp;
    setName: (name: string) => void;
    message: string;
    setMessage: (message: string) => void;
    items: formItem[];
    handleChange: (id: string, value: string) => void;
    handleSubmit: () => void;
    response: string;
}

const LooseYourTimeForm: React.FC<Props> = ({name,namePattern, setName, message, setMessage, items, handleChange, handleSubmit, response}) => {
    return (
        <div>
            <form
                onSubmit={handleSubmit}
            >
                <LooseYourTimeInput
                    value={name}
                    setValue={(): void => setName(name)}
                    label="Name"
                    id="name"
                    required={true}
                    type="text"
                    inputMode="text"
                    pattern={namePattern}
                />

                {items.map((item: formItem) => (
                    <LooseYourTimeInput
                        key={item.id}
                        value={item.value}
                        setValue={(): void => handleChange(item.id, item.value)}
                        label={item.label}
                        id={item.id}
                        required={true}
                        type={item.type}
                        inputMode={item.inputMode}
                        pattern={item.pattern}
                    />
                ))}

                <textarea
                    id="message"
                    name="message"
                    onChange={(e): void => setMessage(e.target.value)}
                    required={true}
                    rows={4}
                    placeholder="Your message..."
                >
                    {message}
                </textarea>

                <button
                    type="button"
                    onClick={handleSubmit}
                >
                    <span>
                        Send
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512" fill="currentColor">
                        <path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"/>
                    </svg>
                </button>
            </form>
            <p>
                {response}
            </p>
        </div>
    );
};

export default LooseYourTimeForm;