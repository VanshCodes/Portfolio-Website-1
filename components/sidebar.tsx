import { Box, Image } from "@chakra-ui/react";
import SideBarItem from "./sidebar-item";

const Sidebar = () => {
  return (
    <Box className="flex flex-col [grid-area:sidebar] h-screen items-center justify-between w-full bg-header-background">
      <Image
        boxSize="5rem"
        src="https://bit.ly/dan-abramov"
        alt="Dan Abramov"
        className="object-contain rounded-full"
      />
      <SideBarItem />
      <Image
        boxSize="5rem"
        src="https://bit.ly/dan-abramov"
        alt="Dan Abramov"
        className="object-contain rounded-full"
      />
    </Box>
  );
};
export default Sidebar;
