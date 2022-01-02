import { Box, Button, IconButton, Image, useColorMode } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import { FaBeer, FaInstagram } from "react-icons/fa";
import React, { ReactComponentElement, useEffect } from "react";
import styles from "../styles/Home.module.css";
import HomeConfig from "../config/home.config";
import { DescriptionColor, NameColor } from "../components/BasicComponents";
import homeConfig from "../config/home.config";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-2/3 space-y-3">
      <h1 className="page-heading">
        {"Hi, I am "}
        <NameColor text={homeConfig.name} />
      </h1>
      <DescriptionColor text={homeConfig.description} />
      <div className="flex space-x-2 items-center justify-center">
        {HomeConfig.social_links.map(({ name, link, icon }, i) => (
          <IconButton
            key={i}
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
