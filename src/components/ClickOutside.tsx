import React from 'react';

interface Props {
    children: React.ReactNode;
    isOpen: boolean;
    setIsOpen: Function;
}

const ClickOutside: React.FC<Props> = ({children, isOpen, setIsOpen}) => {
    const ref = React.useRef<HTMLDivElement>(null);
    React.useEffect((): () => void => {
        const handleClick = (e: any): void => {
            if(ref.current && (!ref.current.contains(e.target) || e.target.classList.contains('click-outside'))) setIsOpen(false);
        };

        document.addEventListener("click", handleClick);
        return (): void => {
            document.removeEventListener("click", handleClick);
        }
    }, [isOpen, setIsOpen]);

    return (
        <div ref={ref} className="click-outside">
            {children}
        </div>
    );
};

export default ClickOutside;