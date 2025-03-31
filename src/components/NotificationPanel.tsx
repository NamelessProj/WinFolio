import React from 'react';
import {Notification} from "@/utils/interfaces";
import Image from "next/image";
import ClickOutside from "@/components/ClickOutside";

interface Props {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
    notifications: Array<Notification>;
    handleClearNotifications: () => void;
}

const NotificationPanel: React.FC<Props> = ({isOpen, setIsOpen, notifications, handleClearNotifications}) => {
    const ref = React.useRef<HTMLDivElement>(null);

    return (
        <ClickOutside ref={ref} isOpen={isOpen} setIsOpen={setIsOpen}>
            <div ref={ref} id="notification-panel" className={`absolute bottom-7 right-2.5 w-[325px] bg-[rgba(25,25,25,0.7)] backdrop-blur-xl text-white rounded-md transform translate-x-[350px] ${isOpen ? '!translate-x-0' : ''} transition-transform duration-200 ease-in-out`}>
                <div className="flex justify-between items-center bg-[rgba(15,15,15,0.4)] py-2 px-4">
                    <h4>Notifications</h4>
                    <button
                        type="button"
                        className="rounded-sm bg-[#444] py-1 px-2 text-[#eee]"
                        onClick={(): void => handleClearNotifications()}
                    >
                        Clear all
                    </button>
                </div>

                <div className="flex justify-start flex-col">
                    {notifications.length > 0 ? (
                        notifications.map((notification: Notification, i: number) => (
                            <div key={i}>
                                <div className="flex justify-start items-center gap-2 p-2 text-base">
                                    <Image
                                        src={notification.img.src}
                                        alt={notification.img.alt}
                                        width={25}
                                        height={25}
                                        className="object-contain object-center"
                                    />
                                    <p>
                                        {notification.title}
                                    </p>
                                </div>
                                <div className="pl-4 pb-4 pr-4 pt-0 text-sm">
                                    <p>
                                        {notification.text}
                                    </p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-balance text-base py-12">
                            Were you expecting something special here? Well, it&apos;s empty.
                        </p>
                    )}
                </div>
            </div>
        </ClickOutside>
    );
};

export default NotificationPanel;