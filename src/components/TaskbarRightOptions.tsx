import React from 'react';

interface Props {
    notificationsBeenRead: boolean;
    isNotificationsOpen: boolean;
    isWifiMenuOpen: boolean;
    handleToggleWifiMenu: Function;
    handleToggleNotifications: Function;
}

const TaskbarRightOptions: React.FC<Props> = ({notificationsBeenRead, isNotificationsOpen, isWifiMenuOpen, handleToggleWifiMenu, handleToggleNotifications}) => {
    const [time, setTime] = React.useState<string>('00:00');
    const [date, setDate] = React.useState<string>('01.01.2025');

    React.useEffect((): () => void => {
        const updateDate = (now: Date): void => {
            const day: string = now.getDay().toString().padStart(2, '0');
            const month: string = now.getMonth().toString().padStart(2, '0');
            const year: string = now.getFullYear().toString();
            setDate(`${day}.${month}.${year}`);
        };

        const updateTime = (): void => {
            const now: Date = new Date();
            const hours: string = now.getHours().toString().padStart(2, '0');
            const minutes: string = now.getMinutes().toString().padStart(2, '0');
            setTime(`${hours}:${minutes}`);

            if(minutes === '00') updateDate(now);
        };

        updateTime();
        updateDate(new Date());

        const interval = setInterval(updateTime, 1000);
        return (): void => {
            clearInterval(interval);
        };
    }, []);

    const buttonClassName: string = "flex justify-center items-center gap-2.5 h-[calc(100%-15px)] px-2.5 bg-[#0000] text-[12px] text-white rounded-md hover:bg-[#9992] transition-colors duration-200 ease-in-out";

    return (
        <div id="menu-right" className="absolute top-0 bottom-0 right-0 flex justify-end items-center gap-1.5 pr-3">
            <button
                type="button"
                id="wifi-menu-button"
                className={`${buttonClassName} ${isWifiMenuOpen ? 'bg-[#9992]' : ''}`}
                onClick={() => handleToggleWifiMenu()}
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor" height="15">
                    <path d="M54.2 202.9C123.2 136.7 216.8 96 320 96s196.8 40.7 265.8 106.9c12.8 12.2 33 11.8 45.2-.9s11.8-33-.9-45.2C549.7 79.5 440.4 32 320 32S90.3 79.5 9.8 156.7C-2.9 169-3.3 189.2 8.9 202s32.5 13.2 45.2 .9zM320 256c56.8 0 108.6 21.1 148.2 56c13.3 11.7 33.5 10.4 45.2-2.8s10.4-33.5-2.8-45.2C459.8 219.2 393 192 320 192s-139.8 27.2-190.5 72c-13.3 11.7-14.5 31.9-2.8 45.2s31.9 14.5 45.2 2.8c39.5-34.9 91.3-56 148.2-56zm64 160a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor" height="15">
                    <path d="M533.6 32.5C598.5 85.2 640 165.8 640 256s-41.5 170.7-106.4 223.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C557.5 398.2 592 331.2 592 256s-34.5-142.2-88.7-186.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM473.1 107c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C475.3 341.3 496 301.1 496 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zm-60.5 74.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3z"/>
                </svg>
            </button>

            <button
                type="button"
                className={`${buttonClassName} ${isNotificationsOpen ? 'bg-[#9992]' : ''}`}
                onClick={() => handleToggleNotifications()}
            >
                    <span className="flex flex-col items-end gap-0">
                        <span>{time}</span>
                        <span>{date}</span>
                    </span>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill={`${notificationsBeenRead ? '#9aeaff' : 'currentColor'}`} height="15">
                    <path className={`${notificationsBeenRead ? 'hidden' : ''}`} d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"/>
                    <path className={`${notificationsBeenRead ? 'block' : 'hidden'}`} d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v25.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm0 96c61.9 0 112 50.1 112 112v25.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V208c0-61.9 50.1-112 112-112zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z"/>
                </svg>
            </button>
        </div>
    );
};

export default TaskbarRightOptions;