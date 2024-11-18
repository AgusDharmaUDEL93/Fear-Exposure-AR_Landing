"use client";

import { useColorModeValue } from "@/components/ui/color-mode";
import {
  Center,
  Stack,
  Image,
  Heading,
  Text,
  Button,
  HStack,
  Flex,
  Box,
} from "@chakra-ui/react";
import React from "react";

const FooterHome = () => {
  return (
    <Center py={{ base: 4, md: "10%" }} px={{ base: 4, md: "10%" }}>
      <Stack align={"center"} gapY={"0.5rem"}>
        <Image
          src={useColorModeValue(
            "/assets/images/light_icon.svg",
            "/assets/images/dark_icon.svg"
          )}
          alt="App Icon"
        />
        <Heading size={"3xl"} fontWeight={"bold"}>
          FEAR: Fear Exposure AR
        </Heading>
        <Text
          color={useColorModeValue("#666666", "#EFEFF0")}
          textAlign={"center"}
        >
          Exposure therapy anytime, anywhere
        </Text>

        <Button size={"xl"} variant={"outline"} colorPalette={"black"}>
          <HStack align={"center"}>
            <Image src="/assets/images/apple_icon.svg" alt="Apple Icon" />
            <Flex direction={"column"} align={"start"}>
              <Text fontSize={"xs"}>Download on the</Text>
              <Heading size={"md"} marginTop={"-2.5"}>
                App Store
              </Heading>
            </Flex>
          </HStack>
        </Button>
        <Box height={"3rem"} />
        <Text
          color={useColorModeValue("#666666", "#EFEFF0")}
          textAlign={"center"}
        >
          © 2024 Team Denxéro
        </Text>
      </Stack>
    </Center>
  );
};

export default FooterHome;