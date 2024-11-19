"use client";

import { useColorModeValue } from "@/components/ui/color-mode";
import {
  Flex,
  Text,
  Heading,
  HStack,
  Image,
  Stack,
  Box,
} from "@chakra-ui/react";
import React from "react";

const BenefitHome = () => {
  return (
    <Stack px={{ base: 4, md: "10%" }}>
      <Flex
        align={"center"}
        flexDirection={{ base: "column", md: "row" }}
        gapY={"3rem"}
        gapX={"2rem"}
      >
        <Image
          src={useColorModeValue(
            "/assets/images/light_illustration_benefit_therapy.png",
            "/assets/images/dark_illustration_benefit_therapy.png"
          )}
          alt="Therapy image illustration"
        />
        <Stack maxWidth={"35rem"}>
          <HStack align={"center"} gapX={"1rem"}>
            <Image
              src={useColorModeValue(
                "/assets/images/light_benefit_therapy.svg",
                "/assets/images/dark_benefit_therapy.svg"
              )}
              alt="Therapy image icon"
            />
            <Heading color={useColorModeValue("#55B5AB", "#94D1CB")}>
              Therapy
            </Heading>
          </HStack>
          <Heading size={"4xl"}>
            Choose from the variety of therapy options we offer
          </Heading>
          <Text>Select from Among 8 Phobias to Work On</Text>
        </Stack>
      </Flex>
      <Box height={"5rem"} />
      <Flex
        align={"center"}
        flexDirection={{ base: "column-reverse", md: "row" }}
        gapY={"3rem"}
        gapX={"2rem"}
      >
        <Stack maxWidth={"35rem"}>
          <HStack align={"center"} gapX={"1rem"}>
            <Image
              src={useColorModeValue(
                "/assets/images/light_benefit_assessment.svg",
                "/assets/images/dark_benefit_assessment.svg"
              )}
              alt="Assessment image icon"
            />
            <Heading color={useColorModeValue("#55B5AB", "#94D1CB")}>
              Assessment
            </Heading>
          </HStack>
          <Heading size={"4xl"}>
            Assess yourself for a therapy tailored just for you
          </Heading>
          <Text>
            A quick assessment to gage your level of fear and configure your
            next therapy session
          </Text>
        </Stack>
        <Image
          src={useColorModeValue(
            "/assets/images/light_illustration_benefit_assessment.png",
            "/assets/images/dark_illustration_benefit_assessment.png"
          )}
          alt="Assessment image illustration"
        />
      </Flex>
      <Box height={"5rem"} />
      <Flex
        align={"center"}
        flexDirection={{ base: "column", md: "row" }}
        gapY={"3rem"}
        gapX={"2rem"}
      >
        <Image
          src={useColorModeValue(
            "/assets/images/light_illustration_benefit_reflection.png",
            "/assets/images/dark_illustration_benefit_reflection.png"
          )}
          alt="Reflection image illustration"
        />
        <Stack maxWidth={"35rem"}>
          <HStack align={"center"} gapX={"1rem"}>
            <Image
              src={useColorModeValue(
                "/assets/images/light_benefit_reflection.svg",
                "/assets/images/dark_benefit_reflection.svg"
              )}
              alt="Reflection image icon"
            />
            <Heading color={useColorModeValue("#55B5AB", "#94D1CB")}>
              Journaling
            </Heading>
          </HStack>
          <Heading size={"4xl"}>Reflect and journal your experience</Heading>
          <Text>Gain Insight by Reflecting on your Thoughts and Feelings</Text>
        </Stack>
      </Flex>
      <Box height={"5rem"} />
      <Flex
        align={"center"}
        flexDirection={{ base: "column-reverse", md: "row" }}
        gapY={"3rem"}
        gapX={"2rem"}
      >
        <Stack maxWidth={"35rem"}>
          <HStack align={"center"} gapX={"1rem"}>
            <Image
              src={useColorModeValue(
                "/assets/images/light_benefit_log.svg",
                "/assets/images/dark_benefit_log.svg"
              )}
              alt="Log image icon"
            />
            <Heading color={useColorModeValue("#55B5AB", "#94D1CB")}>
              Session Logs
            </Heading>
          </HStack>
          <Heading size={"4xl"}>
            Track your progress across previous sessions
          </Heading>
          <Text>
            Keep a detailed log of your previous sessions, reflecting your
            journey
          </Text>
        </Stack>
        <Image
          src={useColorModeValue(
            "/assets/images/light_illustration_benefit_log.png",
            "/assets/images/dark_illustration_benefit_log.png"
          )}
          alt="Log image illustration"
        />
      </Flex>
    </Stack>
  );
};

export default BenefitHome;
