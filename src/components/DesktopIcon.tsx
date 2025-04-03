import React from 'react';
import {Program} from "@/utils/interfaces";
import Image from "next/image";

interface Props {
    program: Program;
    handleProgram: (name: string) => void;
}

const DesktopIcon: React.FC<Props> = ({program, handleProgram}) => {
    return (
        <>
            {(program.displayOnDesktop && program.area) ? (
                <div className="screen-program text-[12px] text-white" style={{gridArea: `${program.area.rowStart} / ${program.area.colStart} / span 1 / span 1`}}>
                    <button
                        type="button"
                        title={program.name}
                        onDoubleClick={(): void => handleProgram(program.name)}
                        className="h-[min(80px,100%)] w-full flex justify-center items-center flex-col gap-2 cursor-pointer rounded-sm hover:bg-linear-to-bl from-[rgba(250,250,250,0.1)] to-[rgba(250,250,250,0.05)]"
                    >
                        <div className="relative">
                            <Image
                                src={program.src}
                                alt={program.name}
                                width={60}
                                height={50}
                                className="object-contain object-center"
                            />
                            {program.isExeFile && (
                                <p className="absolute bottom-0 left-0 w-4 h-4 bg-white rounded-[1px] text-[#1291de] flex justify-center items-center text-xl font-bold">
                                    &#8599;
                                </p>
                            )}
                        </div>
                        <p className="screen-program-name w-full text-center text-nowrap text-ellipsis overflow-x-clip">
                            {program.name}
                        </p>
                    </button>
                </div>
            ) : null}
        </>
    );
};

export default DesktopIcon;