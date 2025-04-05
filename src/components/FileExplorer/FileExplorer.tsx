import React from 'react';
import {FileExplorerLocation, Program} from "@/utils/interfaces";
import FileExplorerHeader from "@/components/FileExplorer/FileExplorerHeader";
import FileExplorerSubHeader from "@/components/FileExplorer/FileExplorerSubHeader";
import FileExplorerMain from "@/components/FileExplorer/FileExplorerMain";

interface Props {
    programs: Array<Program>;
    handleProgram: (name: string) => void;
}

const FileExplorer: React.FC<Props> = ({programs, handleProgram}) => {
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
                src: "/Folder_OneDrive.png",
                alt: "OneDrive",
                isActive: false,
                content: [],
            },
        ],
        [
            {
                name: "Desktop",
                src: "/Folder_Desktop.png",
                alt: "Desktop",
                isActive: true,
                content: programs,
            },
            {
                name: "Downloads",
                src: "/FolderDownloads.png",
                alt: "Downloads",
                isActive: false,
                content: [],
            },
            {
                name: "Documents",
                src: "/FolderDocuments.png",
                alt: "Documents",
                isActive: false,
                content: [],
            },
            {
                name: "Images",
                src: "/FolderPictures.png",
                alt: "Images",
                isActive: false,
                content: [],
            },
            {
                name: "Music",
                src: "/LibraryMusic.png",
                alt: "Music",
                isActive: false,
                content: [],
            },
            {
                name: "Videos",
                src: "/LibraryVideos.png",
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
        <div className="min-w-[540px]">
            <FileExplorerHeader location={location} />
            <FileExplorerSubHeader />
            <FileExplorerMain
                locationsList={locationsList}
                handleLocationChange={handleLocationChange}
                handleProgram={handleProgram}
            />
        </div>
    );
};

export default FileExplorer;
