'use client'

import React, { useState, useEffect } from 'react'

const Loader = () => {
    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLoader(false);
        }, 2600);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {showLoader && (
                <div className="preloader">
                    <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
                        <path id="preloaderSvg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
                    </svg>

                    <div className="preloader-heading">
                        <div className="load-text">
                            <span>L</span>
                            <span>o</span>
                            <span>a</span>
                            <span>d</span>
                            <span>i</span>
                            <span>n</span>
                            <span>g</span>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Loader