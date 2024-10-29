"use client";

import { MailIcon, HomeIcon, PhoneCall } from "lucide-react";
import Form from "@/components/Form";
import { Fade } from "react-awesome-reveal";

const Contact = () => {
  return (
    <section>
      <div className="container mx-auto">
        {/* Text & Illustration */}
        <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
          {/* text  */}
          <div className="flex flex-col justify-center">
            <Fade
              direction={"left"}
              delay={400}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
                <span className="w-[30px] h-[2px] bg-primary"></span>
                Say Hello 👋
              </div>
            </Fade>
            <Fade
              direction={"left"}
              delay={600}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <h1 className="h1 max-w-md mb-8 bg-gradient-to-r from-primary to-orange-200 bg-clip-text text-transparent">
                Lets's Work Together.
              </h1>
            </Fade>
            <Fade
              direction={"left"}
              delay={800}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <p className="subtitle_p max-w-[400px]">
                I’m always open to new opportunities and collaborations. Contact
                me via email, phone, or social media. I look forward to hearing
                from you soon. 😊
              </p>
            </Fade>
          </div>

          {/* illustration  */}
          
          <div className="hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat"></div>
        
        </div>

        {/* info text & form  */}
        <div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
          {/* info text  */}
          <div className="flex flex-col gap-y-8 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg">
            {/* mail  */}
            <Fade
              direction={"left"}
              delay={400}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <div className="flex items-center gap-x-8">
                <MailIcon size={18} className="text-primary" />
                <div>wahabarf@gmail.com</div>
              </div>
            </Fade>

            {/* address  */}
            <Fade
              direction={"left"}
              delay={600}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <div className="flex items-center gap-x-8">
                <HomeIcon size={18} className="text-primary" />
                <div>Jakarta, Indonesia</div>
              </div>
            </Fade>

            {/* phone  */}
            <Fade
              direction={"left"}
              delay={800}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <div className="flex items-center gap-x-8">
                <PhoneCall size={18} className="text-primary" />
                <div>+62 895 064 07921</div>
              </div>
            </Fade>
          </div>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;
