import { Box, Button, Image, useColorMode } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { FaBeer } from "react-icons/fa";
const Home: NextPage = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return <Box className="[grid-area:restofstuff] w-full h-screen"></Box>;
};

export default Home;
