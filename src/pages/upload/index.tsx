import { Navbar } from "@/components/navbar";
import {
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  chakra,
} from "@chakra-ui/react";
import Head from "next/head";
import { useEffect, useState } from "react";
import { YoutubeTranscript } from "youtube-transcript";

export default function Upload() {
  const [data, setData] = useState({});

  useEffect(() => {
    // fetch youtube video transcrupt

    YoutubeTranscript.fetchTranscript("9JpdAg6uMXs").then((data) => {
      setData(data);
    });
  }, []);

  return (
    <>
      <Head>
        <title>Upload</title>
      </Head>
      <chakra.main>
        <Navbar />
        <Flex
          flexDir="column"
          justify="center"
          align="center"
          w="40%"
          mt="64px"
          mx="auto"
        >
          <FormControl>
            <FormLabel>YouTube URL</FormLabel>
            <Input placeholder="Give a valid link" type="url" />
            <FormHelperText>
              This is the YouTube video you want to summarise.
            </FormHelperText>
          </FormControl>

          <Button colorScheme="blue" mt="8">
            Start summarising 🚀
          </Button>
        </Flex>
      </chakra.main>
    </>
  );
}
