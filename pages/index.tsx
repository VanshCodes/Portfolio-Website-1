import { Box, Button, Image, useColorMode } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import { FaBeer } from "react-icons/fa";
import { useEffect } from "react";
import styles from "../styles/Home.module.css";
import HomeConfig from "../config/home";
const Home: NextPage = () => {
  return (
    <Box className="[grid-area:restofstuff] w-full grid place-items-center ">
      <h1 className="text-4xl md:text-6xl">
        {"Hi, I am "}
        <span className={`text-blue-700 ${styles.underlineanimation}`}>
          {HomeConfig.name}
        </span>
      </h1>
    </Box>
  );
};

export default Home;
