'use client'

import { ChevronsUp } from 'lucide-react';
import React, { useEffect, useState } from 'react'

function BackToTop() {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300 ) {
            setVisible(true);
        } else if (scrolled <= 300) {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        if (typeof window !== 'undefined') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisible);
        return() => window.removeEventListener('scroll', toggleVisible);
    }, []);

  return (
    <div
        style={{display: 'visible' ? 'inline' : 'none'}}
        className='backToTop'
        >
      <button
        onClick={scrollToTop}
        aria-label='back to top'
        >
            <ChevronsUp />
        </button>
    </div>
  )
}

export default BackToTop
