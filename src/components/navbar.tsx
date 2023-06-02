import {
  useColorModeValue,
  useDisclosure,
  chakra,
  Flex,
  HStack,
  IconButton,
  VStack,
  CloseButton,
  Button,
  VisuallyHidden,
  Avatar,
  Box,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import {
  AiOutlineMenu,
  AiOutlineInbox,
  AiFillBell,
  AiFillHome,
} from "react-icons/ai";
import { BsPlus } from "react-icons/bs";

const navItems: {
  title: string;
  link: string;
  icon: React.ReactNode;
}[] = [
  {
    title: "Home",
    link: "/",
    icon: <AiFillHome />,
  },
  {
    title: "About Us",
    link: "/about-us",
    icon: <AiOutlineInbox />,
  },
];

export const Navbar = () => {
  const route = useRouter();
  const bg = useColorModeValue("yellow.600", "gray.400");
  const mobileNav = useDisclosure();
  return (
    <React.Fragment>
      <chakra.header
        bg={bg}
        w="full"
        px={{
          base: 2,
          sm: 4,
        }}
        py={4}
        shadow="md"
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <HStack display="flex" spacing={3} alignItems="center">
            <Box
              display={{
                base: "inline-flex",
                md: "none",
              }}
            >
              <IconButton
                display={{
                  base: "flex",
                  md: "none",
                }}
                aria-label="Open menu"
                fontSize="20px"
                color="gray.800"
                _dark={{
                  color: "inherit",
                }}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />
              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  justifySelf="self-start"
                  onClick={mobileNav.onClose}
                />
                {navItems.map((e) => (
                  <Button
                    w="full"
                    variant={route.pathname === e.link ? "ghost" : "solid"}
                    leftIcon={e.icon as any}
                    onClick={() => route.push(e.link)}
                  >
                    {e.title}
                  </Button>
                ))}
              </VStack>
            </Box>
            <chakra.a
              href="/"
              title="SummaryAI logo"
              display="flex"
              alignItems="center"
            >
              <chakra.h1 fontWeight="800" fontSize="xl" mr="16px">
                SummaryAI
              </chakra.h1>
            </chakra.a>

            <HStack
              spacing={3}
              display={{
                base: "none",
                md: "inline-flex",
              }}
            >
              {navItems.map((e) => (
                <Button
                  w="full"
                  variant={route.pathname === e.link ? "solid" : "ghost"}
                  leftIcon={e.icon as any}
                  colorScheme="blue"
                  onClick={() => route.push(e.link)}
                  fontSize="sm"
                >
                  {e.title}
                </Button>
              ))}
            </HStack>
          </HStack>
          <HStack
            spacing={3}
            display={mobileNav.isOpen ? "none" : "flex"}
            alignItems="center"
          >
            <Button
              onClick={() => route.push("/upload")}
              colorScheme="blue"
              leftIcon={<BsPlus />}
            >
              Upload
            </Button>

            <Avatar
              size="sm"
              name="Dan Abrahmov"
              src="https://bit.ly/dan-abramov"
            />
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
  );
};
