"use client";

import ProjectCard from "@/components/ProjectCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";
import { useState } from "react";
import { Fade, Slide } from "react-awesome-reveal";

const projectData = [
  {
    image: "/work/3.png",
    category: "react js",
    name: "Amazon clone",
    description:
      "Amazon Clone made with react , tailwind, javascript and redux",
    link: "/",
    github: "https://github.com/muhammadwahabarifin",
  },
  {
    image: "/work/1.png",
    category: "react js",
    name: "Homeland ",
    description:
      "A real estate rental website made with react, tailwind & javascript.",
    link: "/",
    github: "https://github.com/muhammadwahabarifin",
  },
  {
    image: "/work/2.png",
    category: "Html CSS",
    name: "Lumina Website",
    description:
      "Lorem ipsum, dolor sit amet consectetur a necessitatibus eveniet est tenetur quisquam",
    link: "/",
    github: "https://github.com/muhammadwahabarifin",
  },
  {
    image: "/work/2.png",
    category: "Html CSS",
    name: "Evolve Website",
    description:
      "Lorem ipsum, dolor sit amet consectetur a necessitatibus eveniet est tenetur quisquam",
    link: "/",
    github: "/",
  },
  {
    image: "/work/7.png",
    category: "react js",
    name: "Analysis Tools",
    description:
      "A suite of analytical tools for developers with Astro.js, React.js, Tailwind CSS",
    link: "https://astro-js-nine.vercel.app/",
    github: "https://github.com/muhammadwahabarifin",
  },
  {
    image: "/work/4.png",
    category: "next js",
    name: "Envision Website",
    description:
      "Lorem ipsum, dolor sit amet consectetur a necessitatibus eveniet est tenetur quisquam",
    link: "/",
    github: "/",
  },
  {
    image: "/work/5.png",
    category: "next js",
    name: "Astra Agency",
    description:
      "Lorem ipsum, dolor sit amet consectetur a necessitatibus eveniet est tenetur quisquam",
    link: "https://astra-roan.vercel.app/",
    github: "https://github.com/muhammadwahabarifin",
  },
];

// remove category duplicates
const uniqueCategories = [
  "all projects",
  ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all projects");

  const filteredProjects = projectData.filter((project) => {
    // if category is all projects then return all projects, else filter  by category.
    return category === "all projects"
      ? project
      : project.category === category;
  });

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <Slide
          direction={"up"}
          delay={600}
          cascade
          damping={1e-1}
          triggerOnce={true}
        >
          <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto bg-gradient-to-r from-primary to-orange-200 bg-clip-text text-transparent">
            My Projects
          </h2>
        </Slide>
        {/* tabs */}
        <Tabs className="mb-24 xl:mb-48" defaultValue={category}>
          <Fade
            direction={"left"}
            delay={600}
            cascade
            damping={1e-1}
            triggerOnce={true}
          >
            <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
              {categories.map((category, index) => {
                return (
                  <TabsTrigger
                    key={index}
                    value={category}
                    onClick={() => setCategory(category)}
                    className="capitalize w-[162px] md:w-auto"
                  >
                    {category}
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </Fade>
          {/* tabs content */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            <Fade
              direction={"right"}
              delay={400}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              {filteredProjects.map((project, index) => {
                return (
                  <TabsContent value={category} key={index}>
                    <ProjectCard project={project} />
                  </TabsContent>
                );
              })}
            </Fade>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
