import { Navbar } from "@/components/navbar";
import { chakra } from "@chakra-ui/react";
import Head from "next/head";

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>About us</title>
      </Head>
      <chakra.main>
        <Navbar />
        About us
      </chakra.main>
    </>
  );
}
