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
    displayInExplorer?: boolean;
    startFullScreen?: boolean;
    type?: 'Shorthand'|'Folder'|'File'|'Shortcut';
    size?: string;
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

export interface FileExplorerLocation {
    name: string;
    src: string;
    alt: string;
    isActive: boolean;
    content: Program[];
}