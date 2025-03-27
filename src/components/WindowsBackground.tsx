import Image from "next/image";

const WindowsBackground = () => {
    return <Image
        src="/windows11_background.jpg"
        alt="Background image from Windows 11"
        fill={true}
        priority={true}
        className="-z-10 object-cover object-center"
    />;
};

export default WindowsBackground;