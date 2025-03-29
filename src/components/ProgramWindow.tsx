import React from 'react';
import {Program} from "@/utils/interfaces";
import Image from "next/image";

interface Props {
    children: React.ReactNode;
    program: Program;
    onClose: Function;
    isFullScreen?: boolean;
    handleFullScreen?: Function;
}

const ProgramWindow: React.FC<Props> = ({children, program, onClose, isFullScreen, handleFullScreen}) => {
    const ref = React.useRef<HTMLDivElement>(null);
    const [{dx, dy}, setOffset] = React.useState({dx: 0, dy: 0});

    const handleMouseDown = (e: any): void => {
        const startPos: {x: number, y: number} = {
            x: e.clientX - dx,
            y: e.clientY - dy,
        };

        const handleMouseMove = (e: any): void => {
            const elem: HTMLDivElement|null = ref.current;
            if(!elem) return;

            // How far the mouse has been moved
            let dx: number = e.clientX - startPos.x;
            let dy: number = e.clientY - startPos.y;

            // Set the position
            elem.style.transform = `translate(${dx}px, ${dy}px)`;

            // Reassign the position of mouse
            setOffset({dx, dy});
        };

        const handleMouseUp = (): void => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };

        if(ref.current && e.target === ref.current.querySelector('.program-header')){
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
        }
    }

    const handleTouchStart = (e: any): void => {
        const touch: any = e.touches[0];

        const startPos: {x: number, y: number} = {
            x: touch.clientX - dx,
            y: touch.clientY - dy,
        };

        const handleTouchMove = (e: any): void => {
            const elem: HTMLDivElement|null = ref.current;
            if(!elem) return;

            const touch: any = e.touches[0];

            let dx: number = touch.clientX - startPos.x;
            let dy: number = touch.clientY - startPos.y;

            elem.style.transform = `translate(${dx}px, ${dy}px)`;
            setOffset({dx, dy});
        };

        const handleTouchEnd = (): void => {
            document.removeEventListener('touchmove', handleTouchMove);
            document.removeEventListener('touchend', handleTouchEnd);
        };

        document.addEventListener('touchmove', handleTouchMove);
        document.addEventListener('touchend', handleTouchEnd);
    }

    return (
        <>
            {program.isOpen ? (
                <div
                    ref={ref}
                    onMouseDown={handleMouseDown}
                    onTouchStart={handleTouchStart}
                    className={`program-window absolute top-[12px] left-[50%] max-h-[90dvh] rounded-md overflow-x-clip overflow-y-auto ${isFullScreen ? 'full-screen' : ''}`}
                >
                    <div className="program-header h-[50px] flex justify-between items-center bg-[#2b2b2b]">
                        <div className="program-header-title flex items-center gap-2 pl-5 text-[#eee] text-sm">
                            <Image
                                src={program.src}
                                alt={program.name}
                                width={20}
                                height={20}
                                className="object-contain object-center"
                            />
                            <span className="text-[#eee]">{program.name}</span>
                        </div>
                        <div className="program-header-options h-full flex justify-end items-center">
                            {typeof handleFullScreen === 'function' && (
                                <button className="programToggleFullScreen" type="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
                                        <path className="expand" d="M32 32C14.3 32 0 46.3 0 64v96c0 17.7 14.3 32 32 32s32-14.3 32-32V96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V352zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v64c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H320zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V352z"/>
                                        <path className="compress" d="M160 64c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V64zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32H96v64c0 17.7 14.3 32 32 32s32-14.3 32-32V352c0-17.7-14.3-32-32-32H32zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H352V64zM320 320c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32s32-14.3 32-32V384h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H320z"/>
                                    </svg>
                                </button>
                            )}
                            <button
                                className="programCloseButton !bg-[#414141] hover:!bg-[#e81123]"
                                type="button"
                                onClick={onClose}
                            >
                                &times;
                            </button>
                        </div>
                    </div>
                    <div className="program-main text-white">
                        {children}
                    </div>
                </div>
            ) : null}
        </>
    );
};

export default ProgramWindow;