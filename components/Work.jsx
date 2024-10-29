"use client";

import Link from "next/link";
import { Button } from "./ui/button";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

// components
import ProjectCard from "./ProjectCard";
import { Fade, Slide } from "react-awesome-reveal";
import { ArrowUpRight } from "lucide-react";

const projectData = [
  {
    image: "/work/1.png",
    category: "react js",
    name: "Homeland ",
    description:
      "A real estate rental website made with react, tailwind & javascript.",
    link: "https://beautiful-homeland.netlify.app/",
    github: "https://github.com/premvarma2002/Real-Estate",
  },
  {
    image: "/work/3.png",
    category: "react js",
    name: "Amazon clone",
    description:
      "Amazon Clone made with react , tailwind, javascript and redux",
    link: "https://amazon-clone-ten-lemon.vercel.app/",
    github: "https://github.com/premvarma2002/amazon-clone",
  },
  {
    image: "/work/5.png",
    category: "NextJs",
    name: "Astra Agency",
    description:
      "Build ideas and submit your dream site with Next.js, Tailwind CSS, Shadcn UI, Typescript",
    link: "/https://lms-platform-liard.vercel.app/",
    github: "/https://github.com/premvarma2002/lms-platform",
  },
  {
    image: "/work/6.png",
    category: "NextJS",
    name: "Website Animation",
    description:
      "Engaging developer, built on NextJS, GSAP, Tailwind, and React",
    link: "/https://note-taking-app-nu-coral.vercel.app/",
    github: "/https://github.com/premvarma2002/notion-clone",
  },
  {
    image: "/work/4.png",
    category: "react js",
    name: "Ignite Website",
    description:
      "Lorem ipsum, dolor sit amet consectetur a necessitatibus eveniet est tenetur quisquam dolore",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "react js",
    name: "Envision Website",
    description:
      "Lorem ipsum, dolor sit amet consectetur a necessitatibus eveniet est tenetur quisquam",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "react js",
    name: "Envision Website",
    description:
      "Lorem ipsum, dolor sit amet consectetur a necessitatibus eveniet est tenetur quisquam dolore",
    link: "/",
    github: "/",
  },
];

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* text  */}
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start ">
          <Slide direction={'up'} delay={600} cascade damping={1e-1} triggerOnce={true}>
            <h2 className="section-title mb-4 bg-gradient-to-r from-orange-600 to-orange-200 bg-clip-text text-transparent">
              My Latest Projects
            </h2>
          </Slide>
          <Fade direction={'left'} delay={600} cascade damping={1e-1} triggerOnce={true}>
            <p className="subtitle mb-8">
              Step into the code I've built and brought to life.
            </p>
          </Fade>
          <Link href="/projects">
            <Fade direction={'left'} delay={800} cascade damping={1e-1} triggerOnce={true}>
              <Button type='submit' className='flex items-center gap-x-1 max-w-[166px]'>
                All Projects <ArrowUpRight size={20} />
              </Button>
            </Fade>
          </Link>
        </div>
        {/* slider  */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Fade direction={'right'} delay={600} cascade damping={1e-1} triggerOnce={true}>
            <Swiper
              className="h-[480px]"
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
              }}
              spacebetween={30}
              modules={[Pagination]}
              pagination={{ clickable: true }}
            >
              {/* show only the first 4 projects for the slides  */}
              {projectData.slice(0, 4).map((project, index) => {
                return (
                  <SwiperSlide key={index}>
                    <ProjectCard project={project} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Work;
