import { useEffect } from 'react';
import Typed from 'typed.js';

import './header.css';

export const Header = () => {
    useEffect(() => {
        const ellipsis = new Typed('.ellipsis-holder', {
            strings: ["..."],
            typeSpeed: 400,
            backSpeed: 0,
            backDelay: 2000,
            showCursor: false,
            smartBackspace: false,
            // preStringTyped: (index, value) => {
            //   if (index > 0) {
            //     value.typeSpeed = 300;
            //   }
            // },
            loop: true
        });

        return () => ellipsis.destroy();
    }, []);

    return (
        <header className="header bg-gray-900 relative flex items-center justify-between px-8 py-4 text-white font-semibold shadow-inner before:absolute before:inset-0 before:bg-gradient-to-tr before:from-gray-800 before:to-gray-900 before:rounded-md after:absolute after:top-0 after:left-0 after:right-0 after:h-1 after:bg-gradient-to-r after:from-gray-600 after:via-gray-700 after:to-gray-600 after:rounded-t-md rounded-md">
        {/* <h1 className="text-xl md:text-2xl tracking-wide z-10">Tommy’s Podcast</h1> */}

            <nav className="header-nav flex gap-6 z-10">
                <button className="hover:text-indigo-400 transition" name="/">dear hades<span className="ellipsis-holder"></span></button>
                <div className="header-nav-items">
                    <button className="hover:text-indigo-400 transition" name="/contact">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
                        </svg>
                    </button>
                    <button className="hover:text-indigo-400 transition" name="/gallery">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>
                    </button>
                    <button className="hover:text-indigo-400 transition" name="/albums">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z" />
                        </svg>
                    </button>
                </div>
            </nav>
        </header>
    )
}