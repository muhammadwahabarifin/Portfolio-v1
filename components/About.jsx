'use client'

import DevImg from "./About/DevImg";
import Image from "next/image";
import { skills } from "@/constants";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Button, Tooltip } from '@nextui-org/react';
import { motion } from "framer-motion";

import {
    User2,
    MailIcon,
    HomeIcon,
    PhoneCall,
    GraduationCap,
    Calendar,
    Briefcase,
} from "lucide-react";
import { Fade, Slide } from "react-awesome-reveal";

const infoData = [
    {
        icon: <User2 size={20} />,
        text: "WahabArf",
    },
    {
        icon: <PhoneCall size={20} />,
        text: "+62 89 506 407 921",
    },
    {
        icon: <MailIcon size={20} />,
        text: "wahabarf@gmail.com",
    },
    {
        icon: <Calendar size={20} />,
        text: "Jakarta on 22th Jan , 2024",
    },
    {
        icon: <GraduationCap size={20} />,
        text: "Student Programming",
    },
    {
        icon: <HomeIcon size={20} />,
        text: " Jakarta, Indonesia ",
    },
];

const qualificationData = [
    {
        title: "education",
        data: [
            {
                university: "Informatics Engineering High School, Jakarta",
                qualification: "H.S.C",
                years: "2015 - 2018",
            },
            {
                university: "Web Developer Bootcamp, Jakarta",
                qualification: "Freelance",
                years: "2018 - 2020",
            },
            {
                university: "Dian Nuswantoro University",
                qualification: "Bachelor of Information Management Science",
                years: "2021 - Present",
            },
            // {
            //   university: "LPU University",
            //   qualification: "Master of Computer Applications",
            //   years: "2024 - Present",
            // },
            // {
            //     university: 'IIT Patna',
            //     qualification: 'M.Tech in Cloud Computing',
            //     years:'2026- 2028',
            // },
        ],
    },

    {
        title: "experience",
        data: [
            {
                company: "Upwork",
                role: "Freelance Web developer",
                years: "2023 - Present",
            },

            {
                company: "Codewoofer.in",
                role: "Blogger",
                years: "Jul 2023 - Sep 2023 ",
            },
            {
                company: "InternPe",
                role: "Web Development intern",
                years: "Apr 2023 - Jun 2023",
            },
        ],
    },
];

const skillData = [
    {
        title: "skills",
        data: [
            {
                name: "HTML , CSS, JavaScript ",
            },
            {
                name: "React , Next , Bootstrap",
            },
            {
                name: "Typescript ,Tailwind , Sass CSS ",
            },
            {
                name: "Redux, MUI , shadcn-UI, Prisma ",
            },
        ],
    },
    {
        title: "tools",
        data: [
            {
                imgPath: "/about/vscode.svg",
            },
            {
                imgPath: "/about/docker.svg",
            },
            {
                imgPath: "/about/firebase.svg",
            },
        ],
    },
];

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

const About = () => {
    const getData = (arr, title) => {
        return arr.find((item) => item.title === title);
    };
    //  console.log(getData(qualificationData , 'experience'))
    return (
        <section className="xl:h-[860px] pb-12 pt-1 xl:py-24">
            <div className="container mx-auto">
                <Slide direction={'up'} delay={200} cascade damping={1e-1} triggerOnce={true}>
                    <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto pt-2 bg-gradient-to-r from-orange-600 to-orange-200 bg-clip-text text-transparent">
                        About Me
                    </h2>
                </Slide>
                <div className="flex flex-col xl:flex-row">
                    {/* image  */}
                    <div className="hidden xl:flex flex-1 relative">
                        <Fade direction={'left'}
                            delay={600}
                            cascade
                            damping={1e-1}
                            triggerOnce={true}>
                            <DevImg
                                containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
                                imgSrc="/about/profilAbout.png"
                            />
                        </Fade>
                    </div>
                    {/* tabs  */}
                    <div className="flex-1">
                        <Tabs defaultValue="personal">
                            <Fade direction={'left'}
                                delay={600}
                                cascade
                                damping={1e-1}
                                triggerOnce={true}
                            >
                                <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                                    <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                                        Personal Info
                                    </TabsTrigger>
                                    <TabsTrigger
                                        className="w-[162px] xl:w-auto"
                                        value="qualifications"
                                    >
                                        Qualifications
                                    </TabsTrigger>
                                    <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                                        Skills
                                    </TabsTrigger>
                                </TabsList>
                            </Fade>
                            {/* tabs content  */}
                            <div className="text-lg mt-12 xl:mt-8">
                                {/* personal  */}
                                <TabsContent value="personal">
                                    <div className="text-center xl:text-left">
                                        <Fade
                                            direction={'right'}
                                            delay={400}
                                            cascade
                                            damping={1e-1}
                                            triggerOnce={true}>
                                            <h3 className="h3 mb-4">
                                                Unmatched Service Quality for Over 2 years
                                            </h3>
                                        </Fade>
                                        <Fade
                                            direction={'right'}
                                            delay={600}
                                            cascade
                                            damping={1e-1}
                                            triggerOnce={true}>
                                            <p className="subtitle max-w-[490] max-auto xl:mx-0">
                                                I specialize in crafting intuitive websites with
                                                cutting-edge technology, delivering dynamic and engaging
                                                user experiences
                                            </p>
                                        </Fade>
                                        {/* icons  */}
                                        <div className="grid xl:grid-cols-2 gap-4 mb-12">
                                            {infoData.map((item, index) => {
                                                return (

                                                    <div
                                                        className="flex items-center gap-x-4 mx-auto xl:mx-0"
                                                        key={index}
                                                    >
                                                        <Fade
                                                            direction={'right'}
                                                            delay={800}
                                                            cascade
                                                            damping={1e-2}
                                                            triggerOnce={true}>
                                                            <div className="text-primary ">{item.icon}</div>
                                                            <div>{item.text}</div>
                                                        </Fade>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                        {/* languages  */}
                                        <div className="flex  flex-col gap-y-2">
                                            <Fade
                                                direction={'right'}
                                                delay={600}
                                                cascade
                                                damping={1e-2}
                                                triggerOnce={true}
                                            >
                                                <div className="text-primary">Languages Skill</div>
                                            </Fade>
                                            <Fade direction={'right'} delay={800} cascade damping={1e-2} triggerOnce={true}>
                                                <div className="border-b pb-2 border-border">
                                                    English , Indonesia
                                                </div>
                                            </Fade>
                                        </div>
                                    </div>
                                </TabsContent>
                                {/* qualifications  */}
                                <TabsContent value="qualifications">
                                    <div>
                                        <Fade direction={'right'} delay={400} cascade damping={1e-1} triggerOnce={true}>
                                            <h3 className="h3 mb-8 text-center xl:text-left">
                                                My Awesome Journey
                                            </h3>
                                        </Fade>
                                        {/* experience and education wrapper  */}
                                        <div className="grid md:grid-cols-2 gap-y-8">
                                            {/* experience  */}
                                            <div className="flex flex-col gap-y-6">
                                                <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                                    <Fade direction={'right'} delay={600} cascade damping={1e-2} triggerOnce={true}>
                                                        <Briefcase />
                                                        <h4 className="capitalize font-medium">
                                                            {getData(qualificationData, "experience").title}
                                                        </h4>
                                                    </Fade>
                                                </div>
                                                {/* list  */}
                                                <Fade direction={'right'} delay={600} cascade damping={1e-2} triggerOnce={true}>
                                                    <div className="flex flex-col gap-y-8">
                                                        {getData(qualificationData, "experience").data.map(
                                                            (item, index) => {
                                                                const { company, role, years } = item;
                                                                return (

                                                                    <div className="flex gap-x-8 group" key={index}>
                                                                        <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                                            <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                                                        </div>
                                                                        <div>
                                                                            <div className=" font-semibold text-xl leading-none mb-2">
                                                                                {company}
                                                                            </div>
                                                                            <div className="text-lg leading-none text-muted-foreground mb-4">
                                                                                {role}
                                                                            </div>
                                                                            <div className="text-base font-medium">
                                                                                {years}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                );
                                                            }
                                                        )}
                                                    </div>
                                                </Fade>
                                            </div>
                                            {/* education  */}
                                            <div className="flex flex-col gap-y-6">

                                                <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                                    <Fade direction={'right'} delay={800} cascade damping={1e-2} triggerOnce={true}>
                                                        <GraduationCap size={28} />
                                                        <h4 className="capitalize font-medium">
                                                            {getData(qualificationData, "education").title}
                                                        </h4>
                                                    </Fade>
                                                </div>
                                                {/* list  */}
                                                <Fade direction={'right'} delay={600} cascade damping={1e-2} triggerOnce={true}>
                                                    <div className="flex flex-col gap-y-8">
                                                        {getData(qualificationData, "education").data.map(
                                                            (item, index) => {
                                                                const { university, qualification, years } = item;
                                                                return (
                                                                    <div className="flex gap-x-8 group" key={index}>
                                                                        <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                                            <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                                                        </div>
                                                                        <div>
                                                                            <div className=" font-semibold text-xl leading-none mb-2">
                                                                                {university}
                                                                            </div>
                                                                            <div className="text-lg leading-none text-muted-foreground mb-4">
                                                                                {qualification}
                                                                            </div>
                                                                            <div className="text-base font-medium">
                                                                                {years}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                );
                                                            }
                                                        )}
                                                    </div>
                                                </Fade>
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>
                                <TabsContent value="skills">
                                    <div className="text-center xl:text-left">
                                        <Fade direction={'right'} delay={200} cascade damping={1e-1} triggerOnce={true}>
                                            <h3 className="h3 mb-7">What I Use Everyday</h3>
                                        </Fade>
                                        {/* skills  */}
                                        <div className="mb-16">
                                            <div className="border-b border-border mb-4"></div>
                                            {/* Skill List  */}
                                            <motion.div
                                                className="mt-10 flex flex-wrap sm:gap-12 gap-4 justify-center items-center"
                                                variants={sectionVariants}
                                                initial='hidden'
                                                animate='show'
                                            >

                                                {skills.map((skills) => (
                                                    <motion.div
                                                        className="block-container w-20 h-20"
                                                        key={skills.name}
                                                        variants={sectionListVariants}
                                                    >
                                                        <div className="rounded-xl " />
                                                        <Tooltip content={skills.name} className='border border-primary bg-transparent text-primary rounded-md'>
                                                            <Button className="border backdrop-blur-2xl dark:bg-zinc-800/10 dark:border-neutral-800/60 rounded-xl flex justify-center items-center h-20 w-20" >
                                                                <Image
                                                                    src={skills.imageUrl}
                                                                    alt={skills.name}
                                                                    // className="w-1/2 h-1/2 object-contain"
                                                                    className="w-16 h-16 object-contain"
                                                                />
                                                            </Button>
                                                        </Tooltip>
                                                    </motion.div>
                                                ))}
                                            </motion.div>
                                        </div>
                                    </div>
                                </TabsContent>
                            </div>
                        </Tabs>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
