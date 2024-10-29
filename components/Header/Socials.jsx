"use client";

import {
    RiInstagramFill,
    RiLinkedinFill,
    RiGithubFill,
    RiTwitterXFill,
    RiYoutubeFill,
} from "react-icons/ri";

// import Link from "next/link";
import { motion } from "framer-motion";

// icons for the current user and the current user's profile

const sectionVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.25
        }
    }
}

const sectionListVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
}

const icons = [
    {
        path: "https://www.instagram.com/premvarma.dev",
        name: <RiInstagramFill />,
    },
    {
        path: "https://github.com/premvarma2002",
        name: <RiGithubFill />,
    },
    {
        path: "https://twitter.com/realpremvarma",
        name: <RiTwitterXFill />,
    },
    {
        path: "https://www.youtube.com/channel/UCRRKb78GweCVgbb-7aqM7Zg",
        name: <RiYoutubeFill />,
    },
    {
        path: "https://www.linkedin.com/in/premvarma2002",
        name: <RiLinkedinFill />,
    },
];

const Socials = ({ containerStyles, iconsStyles }) => {
    return (
        <motion.div
            className={`${containerStyles}`}
            variants={sectionVariants}
            initial='hidden'
            animate='show'
        >
            {icons.map((icon, index) => {
                return (
                    <motion.div
                        href={icon.path}
                        key={index}
                        variants={sectionListVariants}
                    >
                        <div className={`${iconsStyles}`}>{icon.name}</div>
                    </motion.div>
                );
            })}
        </motion.div>
    );
};

export default Socials;
