import BenefitHome from "@/components/widgets/home/benefit-home";
import BenefitTitleHome from "@/components/widgets/home/benefit-title-home";
import FeatureHome from "@/components/widgets/home/feature-home";
import FooterHome from "@/components/widgets/home/footer-home";
import HeroHome from "@/components/widgets/home/hero-home";
import { Box, Image, Stack } from "@chakra-ui/react";

export default function Home() {
  return (
    <Stack align={"center"}>
      <HeroHome />
      <Box height={"10rem"} />
      <Image
        px={{ base: 4, md: "10%" }}
        src="/assets/images/hero_illustration.png"
        alt="Application Preview"
        fit={"cover"}
        mx={{ base: 4, md: "10%" }}
      />
      <Box height={"10rem"} />
      <FeatureHome />
      <Box height={"10rem"} />
      <BenefitTitleHome />
      <Box height={"10rem"} />
      <BenefitHome />
      <Box height={"10rem"} />
      <FooterHome />
    </Stack>
  );
}
