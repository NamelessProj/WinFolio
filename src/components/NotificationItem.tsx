import React from 'react';
import {Notification} from "@/utils/interfaces";
import Image from "next/image";

interface Props {
    notification: Notification;
}

const NotificationItem: React.FC<Props> = ({notification}) => {
    return (
        <div>
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
    );
};

export default NotificationItem;