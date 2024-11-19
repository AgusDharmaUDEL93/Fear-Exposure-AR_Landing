"use client";

import { useColorModeValue } from "@/components/ui/color-mode";
import { Heading, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import React from "react";

const FeatureHome = () => {
  return (
    <SimpleGrid
      columns={{ base: 1, lg: 2 }}
      width={"100%"}
      justifyContent={"center"}
      display={"flex"}
      flexWrap={"wrap"}
      gap={"5rem"}
      px={{ base: 4, md: "10%" }}
    >
      <Stack maxWidth={"20rem"} align={"center"} textAlign={"center"}>
        <Image
          src={useColorModeValue(
            "/assets/images/light_phobia_count.svg",
            "/assets/images/dark_phobia_count.svg"
          )}
          alt="Phobia Count"
        />
        <Heading>8 in 1</Heading>
        <Text>FEAR Features Eight of the Most Common Phobias</Text>
      </Stack>
      <Stack maxWidth={"20rem"} align={"center"} textAlign={"center"}>
        <Image
          src={useColorModeValue(
            "/assets/images/light_ar.svg",
            "/assets/images/dark_ar.svg"
          )}
          alt="AR Feature"
        />
        <Heading>Powered by AR</Heading>
        <Text>
          FEAR Utilizes AR to Facilitate Exposure Therapy Quickly and Safely
        </Text>
      </Stack>
      <Stack maxWidth={"20rem"} align={"center"} textAlign={"center"}>
        <Image
          src={useColorModeValue(
            "/assets/images/light_secure.svg",
            "/assets/images/dark_secure.svg"
          )}
          alt="Secure feature"
        />
        <Heading>Local and Secure</Heading>
        <Text>Your progress and Therapy Notes are Only Stored Locally</Text>
      </Stack>
    </SimpleGrid>
  );
};

export default FeatureHome;
