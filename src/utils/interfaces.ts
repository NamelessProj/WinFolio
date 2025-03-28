import React from "react";

export interface Program {
    name: string;
    src: string;
    displayInMenu: boolean;
    component: React.ReactNode;
    isOpen: boolean;
    displayOnDesktop: boolean;
    area: {rowStart: number; colStart: number};
    isExeFile: boolean;
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
    onClick: Function;
}

export interface ContextMenuItem {
    name: string;
    link: string;
    svg: string;
}