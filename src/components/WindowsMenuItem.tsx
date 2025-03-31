import React from 'react';
import Image from "next/image";
import {Program} from "@/utils/interfaces";

interface Props {
    program: Program;
    handleProgram: (name: string) => void;
}

const WindowsMenuItem: React.FC<Props> = ({program, handleProgram}) => {
    return (
        <>
            {program.displayInMenu ? (
                <button
                    type="button"
                    title={program.name}
                    onClick={(): void => handleProgram(program.name)}
                    className="flex justify-center items-center flex-col gap-2.5 rounded-sm text-[12px] hover:bg-[rgba(70,70,70,0.6)]"
                >
                    <span>
                        <Image
                            src={program.src}
                            alt={program.name}
                            width={40}
                            height={40}
                            className="object-contain object-center"
                        />
                    </span>
                    <span className="w-[85px] text-center text-nowrap text-ellipsis overflow-x-clip">
                        {program.name}
                    </span>
                </button>
            ) : null}
        </>
    );
};

export default WindowsMenuItem;