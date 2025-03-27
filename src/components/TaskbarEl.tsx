import React from 'react';
import Image from "next/image";

interface Props {
    src: string;
    title: string;
    onClick: Function|null;
}

const TaskbarEl: React.FC<Props> = ({src, title, onClick}) => {
    const handleClick = (e: any): void => {
        e.preventDefault();
        if(typeof onClick === "function") onClick(e);
    }

    return (
        <div className="taskbar-icon h-[29px] w-[29px] relative isolate" title={title} onClick={handleClick}>
            <Image
                src={src}
                alt={title}
                width={29}
                height={29}
                className="object-contain object-center"
            />
        </div>
    );
};

export default TaskbarEl;