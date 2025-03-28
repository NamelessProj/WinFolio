'use client';

import React from 'react';
import {Notification, Program} from "@/utils/interfaces";
import Calculator from "@/components/Calculator/Calculator";
import Screen from "@/components/Screen";
import Taskbar from "@/components/Taskbar";

interface Props {
    children: React.ReactNode;
}

const allProgramsStatic: Array<Program> = [
    {
        name: "Calculator",
        src: "/Calculator.png",
        displayInMenu: true,
        component: <Calculator />,
        isOpen: false,
        displayOnDesktop: true,
        area: {rowStart: 0, colStart: 0},
        isExeFile: true,
    },
];

const WindowsScreen: React.FC<Props> = ({children}) => {
    const [allPrograms, setAllPrograms] = React.useState<Array<Program>>(allProgramsStatic);
    const [isWindowsMenuOpen, setIsWindowsMenuOpen] = React.useState<boolean>(false);
    const [isWifiMenuOpen, setIsWifiMenuOpen] = React.useState<boolean>(false);
    const [isNotificationsOpen, setIsNotificationsOpen] = React.useState<boolean>(false);
    const [notificationsBeenRead, setNotificationsBeenRead] = React.useState<boolean>(false);
    const [notifications, setNotifications] = React.useState<Array<Notification>>([
        {
            text: "test",
            title: "test",
            img: {
                src: "/Calculator.png",
                alt: "test",
            },
        }
    ]);

    React.useEffect((): void => {
        if(isNotificationsOpen) setNotificationsBeenRead(true);
    }, [isNotificationsOpen, setNotificationsBeenRead]);

    const handleToggleWindowsMenu = (): void => {
        setIsWindowsMenuOpen(!isWindowsMenuOpen);
    }

    const handleToggleWifiMenu = (): void => {
        setIsWifiMenuOpen(!isWifiMenuOpen);
    }

    const handleToggleNotifications = (): void => {
        setIsNotificationsOpen(!isNotificationsOpen);
    }

    const handleClearNotifications = (): void => {
        setNotifications([]);
    }

    const handleProgram = (name: string, toOpen: boolean = true): void => {
        const programs: Array<Program> = allPrograms.map((program: Program): Program => {
            if(program.name === name) program.isOpen = toOpen;
            return program;
        });
        setAllPrograms(programs);
    }

    return (
        <div className="h-full">
            <Screen
                allProgramsStatic={allProgramsStatic}
                allPrograms={allPrograms}
                isWindowsMenuOpen={isWindowsMenuOpen}
                setIsWindowsMenuOpen={setIsWindowsMenuOpen}
                isNotificationsOpen={isNotificationsOpen}
                notifications={notifications}
                isWifiMenuOpen={isWifiMenuOpen}
                setIsWifiMenuOpen={setIsWifiMenuOpen}
                handleClearNotifications={handleClearNotifications}
                handleProgram={handleProgram}
            >
                {children}
            </Screen>

            <Taskbar
                handleToggleWindowsMenu={handleToggleWindowsMenu}
                isWifiMenuOpen={isWifiMenuOpen}
                isNotificationsOpen={isNotificationsOpen}
                notificationsBeenRead={notificationsBeenRead}
                handleToggleWifiMenu={handleToggleWifiMenu}
                handleToggleNotifications={handleToggleNotifications}
            />
        </div>
    );
};

export default WindowsScreen;