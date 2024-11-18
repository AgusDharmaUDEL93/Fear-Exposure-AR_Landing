import { Center, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";

const BenefitTitleHome = () => {
  return (
    <Center px={{ base: 4, md: "10%" }}>
      <Stack align={"center"} textAlign={"center"}>
        <Heading size={{ base: "4xl", md: "6xl" }}>
          How FEAR Can Help You
        </Heading>
        <Text>
          Our app combines a vast library of phobias, exposure therapy methods,
          and tools to help you conquer your fears. Take the first step toward
          overcoming your fears!
        </Text>
      </Stack>
    </Center>
  );
};

export default BenefitTitleHome;
