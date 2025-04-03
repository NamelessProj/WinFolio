import React from "react";

export interface Program {
    name: string;
    src: string;
    displayInMenu: boolean;
    component: React.ReactNode;
    isOpen: boolean;
    displayOnDesktop: boolean;
    area?: {
        rowStart: number;
        colStart: number;
    };
    isExeFile: boolean;
    canBeFullScreen: boolean;
    startFullScreen?: boolean;
}

export interface Notification {
    text: string;
    title: string;
    img: {
        src: string;
        alt: string;
    };
}

export interface TaskbarItem {
    src: string;
    title: string;
    onClick: () => void;
}

export interface ContextMenuItem {
    name: string;
    link: string;
    svg: string;
}