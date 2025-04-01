import React from 'react';
import {Program} from "@/utils/interfaces";
import WindowsMenuItem from "@/components/WindowsMenuItem";
import ClickOutside from "@/components/ClickOutside";
import WindowsMenuFooter from "@/components/WindowsMenuFooter";

interface Props {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
    handleProgram: (name: string) => void;
    programs: Array<Program>;
}

const WindowsMenu: React.FC<Props> = ({isOpen, setIsOpen, handleProgram, programs}) => {
    const ref: React.RefObject<HTMLDivElement|null> = React.useRef<HTMLDivElement>(null);

    return (
        <ClickOutside ref={ref} isOpen={isOpen} setIsOpen={setIsOpen}>
            <div ref={ref} id="windows-menu" className={`absolute z-30 text-[#eee] bottom-3 left-[50%] transform translate-x-[-50%] backdrop-blur-xl w-[640px] p-[var(--windows-menu-padding)] pb-0 rounded-xl border-[1px] border-solid border-[#393939] overflow-clip transition-transform duration-200 ease-out ${isOpen ? 'open' : ''}`}>
                <div className="start-menu-row">
                    <div className="relative h-8 bg-[#222] rounded-full border-[1px] border-solid border-[#393939] flex items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            fill="currentColor"
                            height="16"
                            className="absolute top-[50%] left-4 transform -translate-y-1/2"
                        >
                            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
                        </svg>
                        <input
                            type="text"
                            placeholder="Nothing to see here..."
                            className="pl-10 w-full outline-0 placeholder-[#787878]"
                        />
                    </div>
                </div>
                <div className="start-menu-row">
                    <div className="start-menu-row-title flex justify-between items-center">
                        <h3 className="text-[18px]">
                            Pins
                        </h3>
                        <button
                            type="button"
                            className="cursor-pointer color-[#eee] w-[60px] px-[9px] py-[8px] flex justify-between items-center bg-[#363636] rounded-sm text-[12px]"
                        >
                        <span>
                            All
                        </span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" fill="currentColor" height="12">
                                <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
                            </svg>
                        </button>
                    </div>
                    <div className="start-menu-row-container grid grid-cols-6 auto-rows-[85px] max-h-[170px] overflow-y-auto mt-5">
                        {programs.map((program: Program, i: number) => <WindowsMenuItem key={i} program={program} handleProgram={handleProgram} />)}
                    </div>
                </div>
                <WindowsMenuFooter />
            </div>
        </ClickOutside>
    );
};

export default WindowsMenu;