"use client";

import { useColorModeValue } from "@/components/ui/color-mode";
import { linkRedirection } from "@/utils/link-redirection";
import {
  Button,
  Center,
  Flex,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

const HeroHome = () => {
  return (
    <Center>
      <Stack
        align={"center"}
        px={{ base: 4, md: "10%" }}
        pt={{ base: 4, md: "10%" }}
        gapY={"32px"}
      >
        <Image
          src={useColorModeValue(
            "/assets/images/light_icon.svg",
            "/assets/images/dark_icon.svg"
          )}
          className="light"
          alt="App Icon"
        />
        <Heading size={{ base: "4xl", md: "6xl" }} textAlign={"center"}>
          Exposure therapy anytime, anywhere
        </Heading>
        <Text
          color={useColorModeValue("#666666", "#EFEFF0")}
          textAlign={"center"}
        >
          All in one AR-powered exposure therapy tool to help tackle your fears
        </Text>

        <Button
          size={"xl"}
          variant={"outline"}
          bgColor={"black"}
          onClick={() => {
            linkRedirection(
              "https://apps.apple.com/app/fear-exposure-ar/id6736893205"
            );
          }}
        >
          <HStack align={"center"}>
            <Image src="/assets/images/apple_icon.svg" alt="Apple Icon" />
            <Flex direction={"column"} align={"start"} color={"white"}>
              <Text fontSize={"xs"}>Download on the</Text>
              <Heading size={"xl"} marginTop={"-2.5"}>
                App Store
              </Heading>
            </Flex>
          </HStack>
        </Button>
      </Stack>
    </Center>
  );
};

export default HeroHome;
