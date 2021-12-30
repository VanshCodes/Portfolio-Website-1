import { Box, Image } from "@chakra-ui/react";
import SideBarItem from "./sidebar-item";

const Sidebar = () => {
  return (
    <Box className="flex flex-col [grid-area:sidebar] h-screen items-center justify-between w-full bg-header-background">
      <Image
        borderRadius="full"
        boxSize="150px"
        src="https://bit.ly/dan-abramov"
        alt="Dan Abramov"
      />
      <SideBarItem />
      <Image
        borderRadius="full"
        boxSize="150px"
        src="https://bit.ly/dan-abramov"
        alt="Dan Abramov"
      />
    </Box>
  );
};
export default Sidebar;
