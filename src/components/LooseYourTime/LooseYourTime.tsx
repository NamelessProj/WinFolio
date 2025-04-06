import React from 'react';
import {formItem} from "@/utils/interfaces";
import LooseYourTimeForm from "@/components/LooseYourTime/LooseYourTimeForm";
import LooseYourTimeFinal from "@/components/LooseYourTime/LooseYourTimeFinal";

interface Props {
    name: string;
    setName: (name: string) => void;
}

const PATTERNS = {
    name: /^[a-zA-Z]{2,}$/,
    lastName: /^[a-zA-Z]{2,}$/,
    email: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
    address: /^[a-zA-Z0-9\s,.'-]{3,}$/,
    postcode: /^\d{5}$/,
    city: /^[a-zA-Z\s]{2,}$/,
    country: /^[a-zA-Z\s]{2,}$/,
    phone: /^\+?\d{10,15}$/,
};

const LooseYourTime: React.FC<Props> = ({name, setName}) => {
    const [valid, setValid] = React.useState<boolean>(false);
    const [response, setResponse] = React.useState<string>("");
    const [message, setMessage] = React.useState<string>("");
    const [formItems, setFormItems] = React.useState<formItem[]>([
        {
            id: "lastName",
            value: "",
            label: "Last Name",
            type: "text",
            inputMode: "text",
            pattern: PATTERNS.lastName,
        },
        {
            id: "email",
            value: "",
            label: "Email",
            type: "email",
            inputMode: "email",
            pattern: PATTERNS.email,
        },
        {
            id: "address",
            value: "",
            label: "Address",
            type: "text",
            inputMode: "text",
            pattern: PATTERNS.address,
        },
        {
            id: "postcode",
            value: "",
            label: "Postcode",
            type: "text",
            inputMode: "numeric",
            pattern: PATTERNS.postcode,
        },
        {
            id: "city",
            value: "",
            label: "City",
            type: "text",
            inputMode: "text",
            pattern: PATTERNS.city,
        },
        {
            id: "country",
            value: "",
            label: "Country",
            type: "text",
            inputMode: "text",
            pattern: PATTERNS.country,
        },
        {
            id: "phone",
            value: "",
            label: "Phone Number",
            type: "tel",
            inputMode: "tel",
            pattern: PATTERNS.phone,
        }
    ]);

    const handleChange = (id: string, value: string): void => {
        const newValue: formItem[] = formItems.map((item: formItem): formItem => {
            if(item.id === id) item.value = value;
            return item;
        });
        setFormItems(newValue);
    }

    const handleSubmit = (): void => {
        const isValid: boolean = formItems.every((item: formItem): boolean => {
            const regex = new RegExp(item.pattern);
            return regex.test(item.value);
        });

        setResponse("");
        setValid(isValid);

        if(!isValid) setResponse("Please fill in all fields correctly.");
    }

    return (
        <div>
            {valid ? (
                <LooseYourTimeFinal
                    setValid={setValid}
                />
            ) : (
                <LooseYourTimeForm
                    name={name}
                    namePattern={PATTERNS.name}
                    setName={setName}
                    message={message}
                    setMessage={setMessage}
                    items={formItems}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    response={response}
                />
            )}
        </div>
    );
};

export default LooseYourTime;