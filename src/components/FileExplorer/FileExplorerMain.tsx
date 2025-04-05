import React from 'react';
import Image from "next/image";
import {FileExplorerLocation, Program} from "@/utils/interfaces";

interface Props {
    locationsList: Array<FileExplorerLocation[]>;
    handleLocationChange: (newLocation: string) => void;
    handleProgram: (name: string) => void;
}

const now: Date = new Date();
const day: string = now.getDate().toString().padStart(2, "0");
const month: string = (now.getMonth() + 1).toString().padStart(2, "0");
const year: number = now.getFullYear();
const hours: string = now.getHours().toString().padStart(2, "0");
const minutes: string = now.getMinutes().toString().padStart(2, "0");
const today: string = `${day}.${month}.${year} ${hours}:${minutes}`;

    const FileExplorerMain: React.FC<Props> = ({locationsList, handleLocationChange, handleProgram}) => {
    return (
        <div id="file-explorer-main" className="flex justify-start items-stretch h-[calc(100%-50px)] pb-2.5">
            <div id="file-explorer-main-menu" className="border-r border-solid border-[#888]">
                {locationsList.map((location: FileExplorerLocation[], i: number) => (
                    <React.Fragment key={i}>
                        <ul>
                            {location.map((item: FileExplorerLocation, j: number) => (
                                <li key={j} className={`py-1 px-5 select-none cursor-default text-white text-sm hover:bg-[#666] ${item.isActive ? 'bg-[#6667]' : ''}`}>
                                    <button
                                        type="button"
                                        onClick={(): void => handleLocationChange(item.name)}
                                        className="flex justify-start items-center gap-2.5 w-full h-full py-1"
                                    >
                                        <Image
                                            src={item.src}
                                            alt={item.alt}
                                            width={20}
                                            height={20}
                                            className="aspect-square object-contain object-center"
                                        />
                                        <span>
                                            {item.name}
                                        </span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                        <div className="divider last:hidden w-[calc(100%-20px)] h-[1px] rounded-full bg-[#888] mx-auto my-2.5"></div>
                    </React.Fragment>
                ))}
            </div>

            <div id="file-explorer-main-content" className="text-white text-sm px-2.5">
                <table className="border-spacing-0">
                    <thead>
                        <tr>
                            <th className="font-normal cursor-default text-left pl-2.5 hover:bg-[#888] border-r border-solid border-[#888] py-1">Name</th>
                            <th className="font-normal cursor-default text-left pl-2.5 hover:bg-[#888] border-r border-solid border-[#888] py-1">Modified the</th>
                            <th className="font-normal cursor-default text-left pl-2.5 hover:bg-[#888] border-r border-solid border-[#888] py-1">Type</th>
                            <th className="font-normal cursor-default text-left pl-2.5 hover:bg-[#888] border-r border-solid border-[#888] py-1 pr-3.5">Volumes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {locationsList.map((location: FileExplorerLocation[], i: number) => (
                            <React.Fragment key={i}>
                                {location.map((item: FileExplorerLocation, j: number) => (
                                    <React.Fragment key={j}>
                                        {item.content.map((contentItem: Program, k: number) => (
                                            <React.Fragment key={k}>
                                                {contentItem.displayInExplorer ? (
                                                    <tr
                                                        role="link"
                                                        className={`cursor-default select-none hover:bg-[#888] ${item.isActive ? 'table-row' : 'hidden'}`}
                                                        onDoubleClick={(): void => handleProgram(contentItem.name)}
                                                    >
                                                        <td className="pl-2.5 py-1 pr-12 flex items-center justify-start gap-1">
                                                            <Image
                                                                src={contentItem.src}
                                                                alt={contentItem.name}
                                                                width={20}
                                                                height={20}
                                                                className="aspect-square object-contain object-center"
                                                            />
                                                            <span>
                                                                {contentItem.name}
                                                            </span>
                                                        </td>
                                                        <td className="pl-2.5 py-1 pr-12">{today}</td>
                                                        <td className="pl-2.5 py-1 pr-12">{contentItem.type || ''}</td>
                                                        <td className="pl-2.5 py-1 text-right">{contentItem.size || '0 Ko'}</td>
                                                    </tr>
                                                ) : null}
                                            </React.Fragment>
                                        ))}
                                    </React.Fragment>
                                ))}
                            </React.Fragment>
                        ))}
                        <tr className="opacity-0" aria-hidden="true">
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
