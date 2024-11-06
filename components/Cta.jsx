"use client";

import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { Fade } from "react-awesome-reveal";
import { UserRound } from "lucide-react";

const Cta = () => {
  return (
    <section className="py-24 bg-tertiary dark:bg-secondary/40">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <Fade
            direction={"right"}
            delay={600}
            cascade
            damping={1e-1}
            triggerOnce={true}
          >
            <h2 className="h2 max-w-xl text-center mb-8">
              Prepared to turn your ideas into reality ?
              <br />
              I'am here to help
            </h2>
          </Fade>
          <Link href={"/contact"}>
            <Fade
              direction={"left"}
              delay={800}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <Button
                type="submit"
                className="flex items-center gap-x-1 max-w-[166px]"
              >
                Contact Me <UserRound size={20} />
              </Button>
            </Fade>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cta;
