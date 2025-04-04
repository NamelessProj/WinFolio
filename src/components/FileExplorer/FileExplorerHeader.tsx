import React from 'react';

interface Props {
    location: string;
}

interface ActionButton {
    isActive: boolean;
    svg: React.ReactNode;
}

const actionsButtons: ActionButton[] = [
    {
        isActive: false,
        svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" height="13"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
    },
    {
        isActive: false,
        svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" height="13"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
    },
    {
        isActive: true,
        svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor" height="13"><path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg>
    },
    {
        isActive: true,
        svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" height="13"><path d="M386.3 160H336c-17.7 0-32 14.3-32 32s14.3 32 32 32H464c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v51.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0s-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3s163.8-62.5 226.3 0L386.3 160z"/></svg>
    }
];

const FileExplorerHeader: React.FC<Props> = ({location="Desktop"}) => {
    return (
        <div id="file-explorer-header">
            <div id="file-explorer-header-actions">
                {actionsButtons.map((btn: ActionButton, i: number) => (
                    <button
                        key={i}
                        type="button"
                        className={`${btn.isActive ? 'active' : ''}`}
                    >
                        {btn.svg}
                    </button>
                ))}
            </div>

            <div id="file-explorer-header-location">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor" height="13">
                    <path d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64H240l-10.7 32H160c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H346.7L336 416H512c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM512 64V352H64V64H512z"/>
                </svg>
                <span>&gt;</span>
                <span>
                    {location}
                </span>
                <span>&gt;</span>
            </div>

            <div id="file-explorer-header-search">
                <input
                    type="text"
                    placeholder={`Search in : ${location}`}
                />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" height="10">
                    <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
                </svg>
            </div>
        </div>
    );
};

export default FileExplorerHeader;