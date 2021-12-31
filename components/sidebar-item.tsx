import { Box, Button } from "@chakra-ui/react";
import {
  MdHome,
  MdInfoOutline,
  MdListAlt,
  MdPhone,
  MdSupervisedUserCircle,
} from "react-icons/md";
import { SideBarClickItemProps } from "../types/layout";
import SideBarClickItem from "./sidebar-clickitem";
const SideBarItemsList: SideBarClickItemProps[] = [
  { name: "Home", route: "/", icon: <MdHome /> },
  { name: "About", route: "/about", icon: <MdInfoOutline /> },
  { name: "Resume", route: "/resume", icon: <MdListAlt /> },
  { name: "Portfolios", route: "/portfolio", icon: <MdSupervisedUserCircle /> },
  { name: "Contact", route: "/contact", icon: <MdPhone /> },
];
const SideBarItemList = () => {
  return (
    <Box className="flex sm:flex-col w-full sm:space-y-3 items-center justify-between h-full sm:h-auto">
      {SideBarItemsList.map((item, i) => {
        return <SideBarClickItem {...item} key={i} />;
      })}
    </Box>
  );
};
export default SideBarItemList;
