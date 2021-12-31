import "../styles/globals.css";
import type { AppProps } from "next/app";
import {
  Box,
  ChakraProvider,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import SideBar from "../components/sidebar";

function MyApp({ Component, pageProps }: AppProps) {
  const bg = useColorModeValue("rgb(17,18,26)", "whiteAlpha");

  return (
    <ChakraProvider>
      <Box bg={bg} className="grid main-grid h-screen">
        <SideBar />

        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
}

export default MyApp;
