import React from 'react';
import ClickOutside from "@/components/ClickOutside";

interface Props {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
}

interface Item {
    name: string;
    isActive: boolean;
    svg: React.ReactNode;
}

const WifiPanel: React.FC<Props> = ({isOpen, setIsOpen}) => {
    const ref: React.RefObject<HTMLDivElement|null> = React.useRef<HTMLDivElement>(null);
    const [items, setItems] = React.useState<Array<Item>>([
        {
            name: "Wifi",
            isActive: true,
            svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor" height="20"><path d="M54.2 202.9C123.2 136.7 216.8 96 320 96s196.8 40.7 265.8 106.9c12.8 12.2 33 11.8 45.2-.9s11.8-33-.9-45.2C549.7 79.5 440.4 32 320 32S90.3 79.5 9.8 156.7C-2.9 169-3.3 189.2 8.9 202s32.5 13.2 45.2 .9zM320 256c56.8 0 108.6 21.1 148.2 56c13.3 11.7 33.5 10.4 45.2-2.8s10.4-33.5-2.8-45.2C459.8 219.2 393 192 320 192s-139.8 27.2-190.5 72c-13.3 11.7-14.5 31.9-2.8 45.2s31.9 14.5 45.2 2.8c39.5-34.9 91.3-56 148.2-56zm64 160a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z"/></svg>
        },
        {
            name: "Bluetooth",
            isActive: false,
            svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" fill="currentColor" height="20"><path d="M196.5 260l92.6-103.3L143.1 0v206.3l-86.1-86.1-31.4 31.4 108.1 108.4L25.6 368.4l31.4 31.4 86.1-86.1L145.8 512l148.6-148.6-97.9-103.3zm40.9-103l-50 50-.3-100.3 50.3 50.3zM187.4 313l50 50-50.3 50.3 .3-100.3z"/></svg>
        },
        {
            name: "Plane Mode",
            isActive: false,
            svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor" height="20"><path d="M482.3 192c34.2 0 93.7 29 93.7 64c0 36-59.5 64-93.7 64l-116.6 0L265.2 495.9c-5.7 10-16.3 16.1-27.8 16.1l-56.2 0c-10.6 0-18.3-10.2-15.4-20.4l49-171.6L112 320 68.8 377.6c-3 4-7.8 6.4-12.8 6.4l-42 0c-7.8 0-14-6.3-14-14c0-1.3 .2-2.6 .5-3.9L32 256 .5 145.9c-.4-1.3-.5-2.6-.5-3.9c0-7.8 6.3-14 14-14l42 0c5 0 9.8 2.4 12.8 6.4L112 192l102.9 0-49-171.6C162.9 10.2 170.6 0 181.2 0l56.2 0c11.5 0 22.1 6.2 27.8 16.1L365.7 192l116.6 0z"/></svg>
        }
    ]);

    const handleToggleItem = (name: string): void => {
        const updatedItems: Array<Item> = items.map((item) => {
            if(item.name === name) item.isActive = !item.isActive;
            return item;
        });
        setItems(updatedItems);
    }

    return (
        <ClickOutside ref={ref} isOpen={isOpen} setIsOpen={setIsOpen}>
            <div ref={ref} id="wifi-panel" className={`absolute bottom-2.5 right-2.5 transform translate-y-[200%] ${isOpen ? '!translate-y-0' : ''} grid grid-cols-3 auto-rows-[minmax(60px,75px)] gap-3 p-6 bg-[#3339] backdrop-blur-xl rounded-md transition-transform duration-200 ease-in-out`}>
                {items.map((item: Item, i: number) => (
                    <div key={i} className={`${item.name.replace(/\s+/g,"-").toLowerCase()} flex justify-end items-center gap-2 flex-col text-sm text-white font-normal`}>
                        <button
                            type="button"
                            className={`w-full h-[47px] flex justify-center items-center border border-solid border-[#9995] rounded-md ${item.isActive ? 'bg-[#4cc2ff] text-black active' : 'bg-[#4444] text-white'}`}
                            onClick={(): void => handleToggleItem(item.name)}
                            aria-label={item.name}
                        >
                            {item.svg}
                        </button>
                        <p className="text-center text-balance">
                            {item.name}
                        </p>
                    </div>
                ))}
            </div>
        </ClickOutside>
    );
};

export default WifiPanel;