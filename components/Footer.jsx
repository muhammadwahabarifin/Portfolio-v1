import Socials from "./Header/Socials";

const footer = () => {
  return (
    <footer className="border-t py-10">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between">
          {/* socials  */}
          <Socials
            containerStyles="flex gap-x-6 mx-auto xl:mx-0 mb-4"
            iconsStyles="text-primary dark:text-white/70 text-[20px] hover:text-white dark:hover:text-primary transition-all"
          />
          {/* Copyright  */}
          <div className=" text-muted-foreground">
            Copyright &copy; WahabArf <span className="text-white/35">|</span> All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
export default footer;
