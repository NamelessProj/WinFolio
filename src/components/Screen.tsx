import React from 'react';
import {Notification, Program} from "@/utils/interfaces";
import ProgramWindow from "@/components/ProgramWindow";
import WindowsMenu from "@/components/WindowsMenu";
import DesktopIcon from "@/components/DesktopIcon";
import WifiPanel from "@/components/WifiPanel";
import NotificationPanel from "@/components/NotificationPanel";
import ContextMenu from "@/components/ContextMenu";
import FileExplorer from "@/components/FileExplorer/FileExplorer";

interface Props {
    children: React.ReactNode;
    allPrograms: Array<Program>;
    allProgramsStatic: Array<Program>;
    handleProgram: (name: string, open?: boolean) => void;
    handleClearNotifications: () => void;
    isNotificationsOpen: boolean;
    setIsNotificationsOpen: (open: boolean) => void;
    isWifiMenuOpen: boolean;
    setIsWifiMenuOpen: (open: boolean) => void;
    isWindowsMenuOpen: boolean;
    setIsWindowsMenuOpen: (open: boolean) => void;
    notifications: Array<Notification>;
}

const Screen: React.FC<Props> = ({children, allPrograms, allProgramsStatic, handleProgram, handleClearNotifications, isNotificationsOpen, setIsNotificationsOpen, isWifiMenuOpen, setIsWifiMenuOpen, isWindowsMenuOpen, setIsWindowsMenuOpen, notifications}) => {
    const ref: React.RefObject<HTMLDivElement|null> = React.useRef<HTMLDivElement>(null);
    const [windowsSite, setWindowsSite] = React.useState<{height: number, width: number}>({height: 1080, width: 1920});

    const [fileExplorer, setFileExplorer] = React.useState<Program>({
        name: "File Explorer",
        src: "/Computer.png",
        displayInMenu: false,
        component: <FileExplorer programs={allPrograms} handleProgram={handleProgram} />,
        isOpen: false,
        displayOnDesktop: true,
        area: {rowStart: 1, colStart: 0},
        isExeFile: true,
        canBeFullScreen: true,
        displayInExplorer: false,
    });

    const handleFileExplorer = (toOpen: boolean = true): void => {
        setFileExplorer((prev: Program): Program => ({
            ...prev,
            isOpen: toOpen,
        }));
    }

    React.useEffect((): () => void => {
        const setSizes = (): void => {
            if(!ref.current) return;
            const {clientHeight, clientWidth} = ref.current;
            setWindowsSite({height: clientHeight, width: clientWidth});
        }

        setSizes();
        window.addEventListener('resize', setSizes);
        return (): void => {
            window.removeEventListener('resize', setSizes);
        };
    }, [ref]);

    return (
        <section ref={ref} id="screen" className="pt-[6px] h-[calc(100%-var(--taskbar-height))] grid grid-cols-[repeat(auto-fill,120px)] grid-rows-[repeat(auto-fill,107px)] relative overflow-clip">

            {allProgramsStatic.map((program: Program, i: number) => <DesktopIcon key={i} program={program} handleProgram={handleProgram} />)}

            <DesktopIcon
                program={fileExplorer}
                handleProgram={(): void => handleFileExplorer()}
            />

            <ProgramWindow
                program={fileExplorer}
                onClose={(): void => handleFileExplorer(false)}
            >
                {fileExplorer.component}
            </ProgramWindow>

            {allPrograms.map((program: Program, i: number) => (
                <ProgramWindow
                    key={i}
                    program={program}
                    onClose={(): void => handleProgram(program.name, false)}
                >
                    {program.component}
                </ProgramWindow>
            ))}

            {children}

            <WifiPanel isOpen={isWifiMenuOpen} setIsOpen={setIsWifiMenuOpen} />

            <NotificationPanel
                isOpen={isNotificationsOpen}
                setIsOpen={setIsNotificationsOpen}
                notifications={notifications}
                handleClearNotifications={handleClearNotifications}
            />

            <ContextMenu windowsSite={windowsSite} />

            <WindowsMenu
                isOpen={isWindowsMenuOpen}
                setIsOpen={setIsWindowsMenuOpen}
                programs={allProgramsStatic}
                handleProgram={handleProgram}
            />
        </section>
    );
};

export default Screen;