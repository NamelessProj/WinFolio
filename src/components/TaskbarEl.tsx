import React from 'react';
import Image from "next/image";
import {TaskbarItem} from "@/utils/interfaces";

interface Props {
    item: TaskbarItem;
}

const TaskbarEl: React.FC<Props> = ({item}) => {
    const handleClick = (e: any): void => {
        e.preventDefault();
        if(typeof item.onClick === "function") item.onClick(e);
    }

    return (
        <div className="taskbar-icon h-[29px] w-[29px] relative isolate" title={item.title} onClick={handleClick}>
            <Image
                src={item.src}
                alt={item.title}
                width={29}
                height={29}
                className="object-contain object-center"
            />
        </div>
    );
};

export default TaskbarEl;