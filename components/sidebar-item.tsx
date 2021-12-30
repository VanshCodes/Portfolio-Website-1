import { Box, Button } from "@chakra-ui/react";
import { MdHome } from "react-icons/md";
import { SideBarClickItemProps } from "../types/layout";
import SideBarClickItem from "./sidebar-clickitem";
const SideBarItemsList: SideBarClickItemProps[] = [
  { name: "Home", route: "/", icon: <MdHome /> },
  { name: "About", route: "/about", icon: <MdHome /> },
  { name: "Resume", route: "/resume", icon: <MdHome /> },
  { name: "Portfolios", route: "/portfolio", icon: <MdHome /> },
  { name: "Contact", route: "/contact", icon: <MdHome /> },
];
const SideBarItemList = () => {
  return (
    <Box className="flex flex-col w-full space-y-3">
      {SideBarItemsList.map((item, i) => {
        return <SideBarClickItem {...item} key={i} />;
      })}
    </Box>
  );
};
export default SideBarItemList;
