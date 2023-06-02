import { Navbar } from "@/components/navbar";
import { chakra } from "@chakra-ui/react";
import Head from "next/head";

export default function Upload() {
  return (
    <>
      <Head>
        <title>Upload</title>
      </Head>
      <chakra.main>
        <Navbar />
        Upload
      </chakra.main>
    </>
  );
}
