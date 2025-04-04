import React from 'react';
import {FileExplorerLocation, Program} from "@/utils/interfaces";
import FileExplorerHeader from "@/components/FileExplorer/FileExplorerHeader";
import FileExplorerSubHeader from "@/components/FileExplorer/FileExplorerSubHeader";
import FileExplorerMain from "@/components/FileExplorer/FileExplorerMain";

interface Props {
    programs?: Array<Program>;
}

const FileExplorer: React.FC<Props> = ({programs}) => {
    const [location, setLocation] = React.useState<string>("Desktop");
    const [locationsList, setLocationsList] = React.useState<Array<FileExplorerLocation[]>>([
        [
            {
                name: "Home",
                src: "/Computer.png",
                alt: "Home",
                isActive: false,
                content: [],
            },
            {
                name: "No Drive",
                src: "/Desktop.png",
                alt: "OneDrive",
                isActive: false,
                content: [],
            },
        ],
        [
            {
                name: "Desktop",
                src: "/Desktop.png",
                alt: "Desktop",
                isActive: true,
                content: [],
            },
            {
                name: "Downloads",
                src: "/Computer.png",
                alt: "Downloads",
                isActive: false,
                content: [],
            },
            {
                name: "Documents",
                src: "/Computer.png",
                alt: "Documents",
                isActive: false,
                content: [],
            },
            {
                name: "Images",
                src: "/Computer.png",
                alt: "Images",
                isActive: false,
                content: [],
            },
            {
                name: "Music",
                src: "/Computer.png",
                alt: "Music",
                isActive: false,
                content: [],
            },
            {
                name: "Videos",
                src: "/Computer.png",
                alt: "Videos",
                isActive: false,
                content: [],
            },
        ]
    ]);

    const handleLocationChange = (newLocation: string): void => {
        setLocation(newLocation);
        const updatedLocationsList = locationsList.map((location: FileExplorerLocation[]) => {
            return location.map((item: FileExplorerLocation) => {
                return {
                    ...item,
                    isActive: item.name === newLocation,
                };
            });
        });
        setLocationsList(updatedLocationsList);
    }

    return (
        <div>
            <FileExplorerHeader location={location} />
            <FileExplorerSubHeader />
            <FileExplorerMain
                locationsList={locationsList}
                handleLocationChange={handleLocationChange}
            />
            {programs && programs.map((program: Program, i: number) => (<div key={i}>{program.name}</div>))}
        </div>
    );
};

export default FileExplorer;