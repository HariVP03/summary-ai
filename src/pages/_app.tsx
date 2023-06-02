import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const commonFont = "Poppins, sans-serif";

const fonts = {
  heading: commonFont,
  body: commonFont,
};

const theme = extendTheme({ config, fonts });



export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}