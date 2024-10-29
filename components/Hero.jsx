'use client'

import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";
import { Fade } from "react-awesome-reveal";

import {
    RiBriefcase4Fill,
    RiTeamFill,
    RiTodoFill,
    RiArrowDownSLine,
} from "react-icons/ri";

// Components
import DevImg from "./About/DevImg";
import Badge from "./Badge";
import Socials from "./Header/Socials";

const Hero = () => {
    return (
        <section className="pt-36 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
            <div className="container mx-auto">
                <div className="flex justify-between gap-x-8">
                    {/* text  */}
                    <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
                        <Fade
                            direction={'left'}
                            delay={400}
                            cascade
                            damping={1e-1}
                            triggerOnce={true}
                        >
                            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
                                Frontend Developer
                            </div>
                        </Fade>
                        <Fade
                            direction={'left'}
                            delay={600}
                            cascade
                            damping={1e-1}
                            triggerOnce={true}
                        >
                            <h1 className="h1 mb-4">Hello , My Name Is
                                <span className="italic bg-gradient-to-r from-primary to-orange-200 bg-clip-text text-transparent">WahabArf_</span>
                            </h1>
                        </Fade>
                        <Fade
                            direction={'up'}
                            delay={800}
                            cascade
                            damping={1e-1}
                            triggerOnce={true}>
                            <p className="subtitle max-w-[490] mx-auto xl:mx-0">
                                Brief description with insights into myself, my vocational
                                journey, and what I engage in professionally.
                            </p>
                        </Fade>
                        {/* buttons  */}
                        <div className="flex gap-2 mx-auto xl:mx-0 mb-12">
                            <Link href={"/contact"}>
                                <Fade
                                    direction={'left'}
                                    delay={400}
                                    cascade
                                    damping={1e-1}
                                    triggerOnce={true}>
                                    <Button className="gap-x-2">
                                        Contact me <Send size={18} />
                                    </Button>
                                </Fade>
                            </Link>

                            <a href="/cv.pdf" download="cv.pdf">
                                <Fade
                                    direction={'right'}
                                    delay={400}
                                    cascade
                                    damping={1e-1}
                                    triggerOnce={true}>
                                    <Button variant='secondary' className="gap-x-2">
                                        Download CV <Download size={18} />
                                    </Button>
                                </Fade>
                            </a>
                        </div>
                        
                        {/* socials  */}
                        <Socials
                            containerStyles="flex gap-x-6 m-auto xl:mx-0"
                            iconsStyles="text-foreground text-[22px] hover:text-primary transition-all"
                        />
                    </div>

                    {/* image  */}
                    <Fade
                        direction={'zoom'}
                        delay={500}
                        cascade
                        damping={1e-1}
                        triggerOnce={true}
                    >
                        <div className="hidden xl:flex relative">
                            {/* badge  */}
                            <Badge
                                containerStyles="absolute top-[24%] -left-[5rem]"
                                icon={<RiBriefcase4Fill />}
                                endCountNum={2}
                                badgeText="Years Of Experience"
                            />
                            {/* badge 2  */}
                            <Badge
                                containerStyles="absolute top-[80%] -left-[1rem]"
                                icon={<RiTodoFill />}
                                endCountNum={18}
                                // endCountText={'k'}
                                badgeText="Finished Projects"
                            />
                            {/* badge 3  */}
                            <Badge
                                containerStyles="absolute top-[55%] -right-8"
                                icon={<RiTeamFill />}
                                endCountNum={23}
                                // endCountText={'k'}
                                badgeText="Happy Clients"
                            />

                            <Fade
                                direction={'flip'}
                                delay={600}
                                cascade
                                damping={1e-1}
                                triggerOnce={true}>
                                <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2 "></div>

                                <DevImg
                                    containerStyles="bg-hero_shape w-[530px] h-[460px] bg-no-repeat relative bg-bottom"
                                    imgSrc="/hero/profilHero.png"
                                />
                            </Fade>
                        </div>
                    </Fade>
                </div>
                {/* icon   */}
                <div className="hidden md:flex absolute left-2/4 botton-44 xl:bottom-12 animate-bounce">
                    <RiArrowDownSLine className="text-3xl text-primary" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
