import React from 'react';

const items: Array<{name: string, link: string, svg: string}[]> = [
    [
        {
            name: 'Contact Me',
            link: 'mailto:pintokevin2002@hotmail.com',
            svg: 'M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z',
        }
    ],
    [
        {
            name: 'Instagram',
            link: 'https://www.instagram.com/_kevin_pin?igsh=MThxMWFmN2tra3FkZw%3D%3D&utm_source=qr',
            svg: 'M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z',
        }
    ]
];

interface Props {
    windowsSite: {
        height: number;
        width: number;
    };
}

const ContextMenu: React.FC<Props> = ({windowsSite}) => {
    const ref = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const handleOpenContext = (e: MouseEvent): void => {
            e.preventDefault();
            if(!ref.current) return;

            const {clientHeight, clientWidth} = ref.current;

            ref.current.style.top = e.y + clientHeight >= windowsSite.height ? `${e.y - clientHeight}px` : `${e.y}px`;
            ref.current.style.left = e.x + clientWidth >= windowsSite.width ? `${e.x - clientWidth}px` : `${e.x}px`;

            ref.current.classList.remove('hidden');
        }

        const handleCloseContext = (e: MouseEvent): void => {
            if(!ref.current) return;
            ref.current.classList.add('hidden');
        }

        document.addEventListener('contextmenu', handleOpenContext);
        if(ref.current) ref.current.addEventListener('mouseleave', handleCloseContext);

        return (): void => {
            document.removeEventListener('contextmenu', handleOpenContext);
            if(ref.current) ref.current.removeEventListener('mouseleave', handleCloseContext);
        }
    }, [windowsSite]);

    return (
        <div ref={ref} id="context-menu" className="absolute top-0 left-0 w-[400px] bg-[rgba(42,42,42,0.8)] z-50 rounded-xl backdrop-blur-md hidden">
            {items.map((row, i) => (
                <div key={i} className="context-section py-4 px-2.5 text-white text-base">
                    {row.map((item, j) => (
                        <a
                            key={j}
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
                    ))}
                </div>
            ))}
        </div>
    );
};

export default ContextMenu;