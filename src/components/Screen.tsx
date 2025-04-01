import React from 'react';
import {Notification, Program} from "@/utils/interfaces";
import ProgramWindow from "@/components/ProgramWindow";
import WindowsMenu from "@/components/WindowsMenu";
import DesktopIcon from "@/components/DesktopIcon";
import WifiPanel from "@/components/WifiPanel";
import NotificationPanel from "@/components/NotificationPanel";
import ContextMenu from "@/components/ContextMenu";

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
    }, []);

    return (
        <section ref={ref} id="screen" className="pt-[6px] h-[calc(100%-var(--taskbar-height))] grid grid-cols-[repeat(auto-fill,120px)] grid-rows-[repeat(auto-fill,107px)] relative overflow-clip">

            {allProgramsStatic.map((program: Program, i: number) => <DesktopIcon key={i} program={program} handleProgram={handleProgram} />)}

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