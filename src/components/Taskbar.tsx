import React from 'react';
import TaskbarEl from "@/components/TaskbarEl";
import TaskbarRightOptions from "@/components/TaskbarRightOptions";

interface Props {
    handleToggleWindowsMenu: Function;
    isWifiMenuOpen: boolean;
    isNotificationsOpen: boolean;
    notificationsBeenRead: boolean;
    handleToggleNotifications: Function;
    handleToggleWifiMenu: Function;
}

const Taskbar: React.FC<Props> = ({handleToggleWindowsMenu, isWifiMenuOpen, isNotificationsOpen, notificationsBeenRead, handleToggleNotifications, handleToggleWifiMenu}) => {
    const taskbar: {src: string, title: string, onClick: Function}[] = [
        {
            src: "/windows_menu.png",
            title: "Windows Menu",
            onClick: () => handleToggleWindowsMenu(),
        },
        {
            src: "/googleChrome.png",
            title: "Google Chrome",
            onClick: () => window.open("https://www.google.com", "_blank"),
        }
    ];

    return (
        <div id="taskbar" className="absolute bottom-0 left-0 right-0 h-[var(--taskbar-height)] bg-[#3338] text-white flex justify-center items-center gap-6 backdrop-blur-xl">
            {taskbar.map((el, i) => <TaskbarEl
                key={i}
                src={el.src}
                title={el.title}
                onClick={typeof el.onClick === 'function' ? el.onClick : null}
            />)}

            <TaskbarRightOptions
                notificationsBeenRead={notificationsBeenRead}
                isWifiMenuOpen={isWifiMenuOpen}
                isNotificationsOpen={isNotificationsOpen}
                handleToggleNotifications={handleToggleNotifications}
                handleToggleWifiMenu={handleToggleWifiMenu}
            />
        </div>
    );
};

export default Taskbar;