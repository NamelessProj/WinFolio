import React from 'react';
import {ContextMenuItem} from "@/utils/interfaces";

interface Props {
    item: ContextMenuItem;
}

const ContextMenuEl: React.FC<Props> = ({item}) => {
    return (
        <a
            href={item.link}
            target="_blank"
            className="py-2.5 px-3 rounded-md flex items-center gap-2.5 hover:bg-[#5558]"
        >
            <svg className="text-[#1291de]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" height="20">
                <path d={item.svg} />
            </svg>
            <p>
                {item.name}
            </p>
        </a>
    );
};

export default ContextMenuEl;