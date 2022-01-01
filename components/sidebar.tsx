import { Box, Image } from "@chakra-ui/react";
import { MdCopyright } from "react-icons/md";

import SideBarItem from "./sidebar-item";

const Sidebar = () => {
  return (
    <Box className="flex sm:flex-col [grid-area:sidebar] sm:h-screen items-center sm:justify-between w-full bg-header-background">
      <Image
        src="https://tf-react-chester.vercel.app/images/brand-image.jpg"
        alt="Dan Abramov"
        className="inline-flex object-contain !h-10 sm:!h-1/6 m-3 rounded-full"
      />

      <SideBarItem />
      <div className="hidden sm:flex flex-wrap justify-between items-center text-gray-300 border-white border-t-2 border-t-gray-400 w-full">
        <MdCopyright className=" m-2 " />
        <div className="year m-2 hover:text-blue-400/80 transition-all cursor-pointer font-bold">
          2021 Portfolio
        </div>
      </div>
    </Box>
  );
};
export default Sidebar;
