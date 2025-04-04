import React from 'react';
import Image from "next/image";
import {FileExplorerLocation, FileExplorerLocationItem} from "@/utils/interfaces";

interface Props {
    locationsList: Array<FileExplorerLocation[]>;
    handleLocationChange: (newLocation: string) => void;
}

const now: Date = new Date();
const day: string = now.getDate().toString().padStart(2, "0");
const month: string = (now.getMonth() + 1).toString().padStart(2, "0");
const year: number = now.getFullYear();
const hours: string = now.getHours().toString().padStart(2, "0");
const minutes: string = now.getMinutes().toString().padStart(2, "0");
const today: string = `${day}.${month}.${year} ${hours}:${minutes}`;

const FileExplorerMain: React.FC<Props> = ({locationsList, handleLocationChange}) => {
    return (
        <div id="file-explorer-main">
            <div id="file-explorer-main-menu">
                {locationsList.map((location: FileExplorerLocation[], i: number) => (
                    <React.Fragment key={i}>
                        <ul>
                            {location.map((item: FileExplorerLocation, j: number) => (
                                <li key={j} className={`${item.isActive ? 'active' : ''}`}>
                                    <button
                                        type="button"
                                        onClick={(): void => handleLocationChange(item.name)}
                                    >
                                        <Image
                                            src={item.src}
                                            alt={item.alt}
                                        />
                                        <span>
                                    {item.name}
                                </span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                        <div className="divider"></div>
                    </React.Fragment>
                ))}
            </div>

            <div id="file-explorer-main-content">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Modified the</th>
                            <th>Type</th>
                            <th>Volumes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {locationsList.map((location: FileExplorerLocation[], i: number) => (
                            <React.Fragment key={i}>
                                {location.map((item: FileExplorerLocation, j: number) => (
                                    <React.Fragment key={j}>
                                        {item.content.map((contentItem: FileExplorerLocationItem, k: number) => (
                                            <tr
                                                key={k}
                                                role="link"
                                                className={`${item.isActive ? 'active' : ''}`}
                                            >
                                                <td>
                                                    <Image
                                                        src={contentItem.src}
                                                        alt={contentItem.alt}
                                                    />
                                                    <span>
                                                {contentItem.name}
                                            </span>
                                                </td>
                                                <td>{today}</td>
                                                <td>{contentItem.type || ''}</td>
                                                <td>{contentItem.size || '0 Ko'}</td>
                                            </tr>
                                        ))}
                                    </React.Fragment>
                                ))}
                            </React.Fragment>
                        ))}
                        <tr className="hidden">
                            <td>
                                <span>I see you</span>
                            </td>
                            <td>{today}</td>
                            <td>See You On The Other Side</td>
                            <td>0 Ko</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default FileExplorerMain;