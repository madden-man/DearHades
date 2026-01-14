import Typed from 'typed.js';
import { useState, useEffect } from 'react';
import classNames from 'classnames';

import './intro.css';

export const Intro = () => {
    const [hasEntered, setEntered] = useState(false);

    useEffect(() => {
        const titleType = new Typed('.courier-prime-regular', {
        strings: ["dear hades^300.^350.^400."],
        typeSpeed: 150,
        backSpeed: 0,
        showCursor: true,
        smartBackspace: false,
        cursorChar: "|",
        // preStringTyped: (index, value) => {
        //   if (index > 0) {
        //     value.typeSpeed = 300;
        //   }
        // },
        loop: false
        });

        setTimeout(() => {
            if (window.screen.width < 480) {
                setEntered(true);
            }
        }, 5000);

        setTimeout(() => {
            if (!hasEntered) {
                setEntered(true);

            }
        }, 10000);

        setTimeout(() => {
            if (!hasEntered) {
                setEntered(true);
                titleType.destroy();
            }
        }, 12000);

        return () => titleType.destroy();
    }, []);

    return (
        <div className={classNames('intro', { 'intro--entered': hasEntered })}>
            {!hasEntered && <span className='courier-prime-regular entry-text' onClick={() => setEntered(true)}/>}
        </div>
    )
}