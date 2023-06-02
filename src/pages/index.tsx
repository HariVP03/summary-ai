import Head from "next/head";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { chakra } from "@chakra-ui/react";
import Read from "./components/Read";
import Hero from "./components/Hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>SummaryAI</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* <Navbar/> */}
        <Hero/>
        <Read/>
      </main>
    </>
  );
}
