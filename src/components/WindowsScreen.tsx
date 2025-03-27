import React from 'react';
import {Program} from "@/utils/interfaces";

interface Props {
    children: React.ReactNode;
}

const allProgramsStatic: Array<Program> = [
    {
        name: "Calculator",
        src: "/Calculator.png",
        displayInMenu: true,
        component: <></>,
        isOpen: false,
        displayOnDesktop: true,
        area: {rowStart: 0, colStart: 0},
        isExeFile: true,
    },
];

const WindowsScreen: React.FC<Props> = ({children}) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default WindowsScreen;