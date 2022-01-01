import { Box, Button, IconButton, Image, useColorMode } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import { FaBeer, FaInstagram } from "react-icons/fa";
import { useEffect } from "react";
import styles from "../styles/Home.module.css";
import HomeConfig from "../config/home";

const Home: NextPage = () => {
  return (
      <div className="flex flex-col items-center justify-center w-2/3 space-y-3">
        <h1 className="text-4xl md:text-5xl font-bold">
          {"Hi, I am "}
          <span className={`text-blue-500 py-2 break-words`}>{HomeConfig.name}</span>
        </h1>
        <h3 className="sm:text-base md:text-lg lg:text-xl text-gray-400">
          {HomeConfig.description}
        </h3>
        <div className="flex space-x-2 items-center justify-center">
          {HomeConfig.social_links.map(({ name, link, icon }, i) => (
            <IconButton
              variant="outline"
              colorScheme="blue"
              aria-label={name}
              fontSize="20px"
              icon={icon}
              isRound={true}
            />
          ))}
        </div>
      </div>
  );
};

export default Home;
