import React from 'react';

interface Props {
    children: React.ReactNode;
    ref: React.RefObject<HTMLDivElement|null>;
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
}

const ClickOutside: React.FC<Props> = ({children, ref, isOpen, setIsOpen}) => {
    React.useEffect((): () => void => {
        const handleClick = (e: any): void => {
            if(ref.current && !ref.current.contains(e.target)) setIsOpen(false);
        };

        document.addEventListener("click", handleClick);
        return (): void => document.removeEventListener("click", handleClick);
    }, [isOpen, setIsOpen, ref]);

    return children;
};

export default ClickOutside;