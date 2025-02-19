'use client';

import SVG from 'react-inlinesvg';

interface HeaderProps {
    colour: string;
}

export default function Header({ colour }: HeaderProps) { 
    return (
        <header
            className={`w-screen h-20 border-b duration-500 ease-in-out
            flex items-center justify-between px-36 fixed top-0 left-0 z-40`}
            style={{color: colour, borderColor: colour}}
        >
            <SVG src="logo.svg" style={{fill:colour}} className="duration-500 scale-75 -ml-3" />
            <nav className="flex gap-10 font-medium">
                <a href="#home">HOME</a>
                <a href="#about">ABOUT</a>
                <a href="#browse">BROWSE <SVG src="down-arrow.svg" style={{stroke:colour}} className="duration-500 -mr-2" /> </a>
                <a href="#expertise">EXPERTISE <SVG src="down-arrow.svg" style={{stroke:colour}} className="duration-500 -mr-2" /> </a>
                <a href="#contact">CONTACT</a>
            </nav>
        </header>
    );
}