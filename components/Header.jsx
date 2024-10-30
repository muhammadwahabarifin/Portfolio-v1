'use client';

import { useEffect, useState } from "react";

import ThemeToggler from "@/context/ThemeToggler";
import Logo from "./Header/Logo";
import Nav from "./Header/Nav";
import MobileNav from "./Header/MobileNav";
import { usePathname } from "next/navigation";

const Header = () => {
    const [header, setHeader] = useState(false);
    const pathName = usePathname();

    useEffect(() => {
        const scrollYPos = window.addEventListener('scroll', () => {
            window.scrollY > 50 ? setHeader(true) : setHeader(false);
        });

        return () => window.removeEventListener('scroll', scrollYPos);
    });

    return (
        <header
            className={`${header
                ? 'py-4 backdrop-blur-lg backdrop-filter shadow-lg bg-transparent'
                : 'py-6 dark:bg-transparent'
                } sticky top-0 z-30 transition-all ${pathName === '/' && 'bg-[#fef9f5]'}`}
        >
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <Logo />
                    <div className="flex items-center gap-x-6">
                        <Nav
                            containerStyles='hidden xl:flex gap-x-8 items-center'
                            linkStyle='relative hover:text-primary transition-all'
                            underlineStyle='absolute left-0 top-full h-[2px] bg-primary w-full'
                        />
                        <ThemeToggler />
                        <div className="xl:hidden">
                            <MobileNav />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;