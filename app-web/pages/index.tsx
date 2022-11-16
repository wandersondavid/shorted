import Head from "next/head";
import { styled } from "../stitches.config";
import { Container, Button, Input } from "@nextui-org/react";
import { Link2Icon } from "@radix-ui/react-icons";

import { Header } from "../components/Header";
import { Text } from "../components/Text";
import img from "../public/background/background-home-page.svg";
import { BackgroundHome } from "../components/background";

const ButtonStyled = styled(Button, {
  background: "$button !important",
  backgroundColor: "$button !important",
});

const HomePage = styled("main", {
  position: "relative",
  height: "100vh",
  overflowX: "hidden",

  "&::before": {
    content: "",
    background: " #5746AF",
    filter: " blur(296.53px)",
    position: "absolute",
    width: "376px",
    height: "376px",
    left: "0px",
    top: "135.5px",
  },
  "&::after": {
    content: "",
    position: "absolute",
    width: "376px",
    height: "376px",
    left: "1593px",
    top: "413px",
    background: "rgba(0, 120, 161, 0.92)",
    filter: " blur(296.53px)",
  },
});

const CardContainer = styled("div", {
  maxWidth: "1008px",
  width: "100%",
  maxHeight: "230px",
  height: "230px",
  backgroundColor: "$cardContainer",
  display: "flex",
  borderRadius: "20px",
  justifyContent: "center",
  alignItems: "center",
});

const CardInput = styled("div", {
  maxWidth: "870px",
  maxHeight: "90px",
  height: "90px",
  width: "100%",
  borderRadius: "15px",
  backgroundColor: "$cardInput",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0px 36px",
});

export default function Home() {
  return (
    <HomePage>
      <Head>
        <title>Short-me</title>
      </Head>
      <BackgroundHome />
      <Header />
      <Container>
        <Container
          css={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Text
            as="h1"
            css={{
              textAlign: "center",
              fontSize: "50px",
              maxWidth: "740px",
            }}
            text="Lorem Ipsum is simply dummy text of the"
          />
          <Text
            as="h2"
            css={{
              textAlign: "center",
              fontSize: "20px",
              maxWidth: "680px",
            }}
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
          />
        </Container>
        <Container
          css={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CardContainer>
            <CardInput>
              <Input
                underlined
                placeholder="centuries, but also the leap into "
                css={{
                  maxWidth: "590px",
                  width: "100%",
                  height: "57px",
                  color: "#AA99EC",
                }}
                contentLeft={
                  <Link2Icon width="20px" height="20px" color="#AA99EC" />
                }
              />
              <ButtonStyled
                css={{
                  width: "166px",
                  height: "57px",
                }}
              >
                Link
              </ButtonStyled>
            </CardInput>
          </CardContainer>
        </Container>
      </Container>
    </HomePage>
  );
}
