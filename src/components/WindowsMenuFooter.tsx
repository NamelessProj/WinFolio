import React from 'react';
import Image from "next/image";

interface Props {
    name?: string|null;
    displayCrown?: boolean;
}

const BUTTON_CLASS: string = "h-9 rounded-md px-1.5 py-[6px] flex justify-center items-center hover:bg-[#363636]";

const WindowsMenuFooter: React.FC<Props> = ({name=null, displayCrown=false}) => {
    return (
        <div id="windows-menu-footer" className="h-[60px] w-[calc(2*var(--windows-menu-padding)+100%)] transform -translate-x-[var(--windows-menu-padding)] bg-[#222] px-[calc(var(--windows-menu-padding)*2)] mt-11">
            <div className="h-full flex justify-between items-center">
                <button
                    type="button"
                    className={`${BUTTON_CLASS} relative isolate`}
                >
                    {displayCrown && (
                        <svg className="text-[#DAA520FF] absolute z-20 top-[-40%] left-[20%] rotate-[20deg] pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor" height="25">
                            <path d="M309 106c11.4-7 19-19.7 19-34c0-22.1-17.9-40-40-40s-40 17.9-40 40c0 14.4 7.6 27 19 34L209.7 220.6c-9.1 18.2-32.7 23.4-48.6 10.7L72 160c5-6.7 8-15 8-24c0-22.1-17.9-40-40-40S0 113.9 0 136s17.9 40 40 40c.2 0 .5 0 .7 0L86.4 427.4c5.5 30.4 32 52.6 63 52.6H426.6c30.9 0 57.4-22.1 63-52.6L535.3 176c.2 0 .5 0 .7 0c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40c0 9 3 17.3 8 24l-89.1 71.3c-15.9 12.7-39.5 7.5-48.6-10.7L309 106z"/>
                        </svg>
                    )}
                    <Image
                        src={typeof name !== "string" ? "/windows11_background.jpg" : `https://api.dicebear.com/8.x/fun-emoji/jpg?seed=${name}`}
                        alt="Profile Picture"
                        width={30}
                        height={30}
                        className="object-cover object-center aspect-square rounded-full"
                    />
                    <span className="ml-2.5">
                        {name || "User"}
                    </span>
                </button>
                <button
                    type="button"
                    className={`${BUTTON_CLASS} aspect-square`}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" height="18">
                        <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V256c0 17.7 14.3 32 32 32s32-14.3 32-32V32zM143.5 120.6c13.6-11.3 15.4-31.5 4.1-45.1s-31.5-15.4-45.1-4.1C49.7 115.4 16 181.8 16 256c0 132.5 107.5 240 240 240s240-107.5 240-240c0-74.2-33.8-140.6-86.6-184.6c-13.6-11.3-33.8-9.4-45.1 4.1s-9.4 33.8 4.1 45.1c38.9 32.3 63.5 81 63.5 135.4c0 97.2-78.8 176-176 176s-176-78.8-176-176c0-54.4 24.7-103.1 63.5-135.4z"/>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default WindowsMenuFooter;