
import React from "react";
import { Grid, Link, Text, Card, Container, Input, Spacer, Button, styled } from "@nextui-org/react";
import { Link2Icon, CopyIcon, CheckIcon } from "@radix-ui/react-icons";
import { NavBar } from "../components/NavBar";
import { BackgroundHome } from "../components/background";

const HomePage = styled("main", {
  position: "relative",
  height: "100vh",
  overflowX: "hidden",
  padding: "0px 20px",
  boxSizing: "border-box",
  "&::before": {
    content: "",
    background: " #5746AF",
    filter: " blur(296.53px)",
    position: "absolute",
    width: "376px",
    height: "376px",
    left: "0px",
    top: "135.5px",
    opacity: '0.2',
    "@media (max-width: 600px)": {
      width: "160px",
    },
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
    "@media (max-width: 600px)": {
      top: "613px",
      width: "110px",
      left: "500px",
      opacity: '0.2',

    },
  },
});

export default function Home() {
  return (
    <HomePage >


      <NavBar />
      <BackgroundHome />
      <Container css={
        {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          width: '100%'
        }
      }>
        <Card css={{ p: "$6", mw: "450px" }}>
          <Card.Header>
            <Text h4 css={{ lineHeight: "$xs" }}>
              Bem vindo!
            </Text>
          </Card.Header>
          <Card.Body css={{ py: "$6" }}>
            <Input labelPlaceholder="E-mail" initialValue="nextui123" />
            <Spacer y={1.6} />
            <Input.Password labelPlaceholder="Senha" initialValue="nextui123" />
            <Spacer y={.2} />

            <Spacer y={1} />
            <Button color="secondary">Entrar</Button>
          </Card.Body>
          <Card.Footer>
            <Link
              target="_blank"
              href="https://github.com/nextui-org/nextui"
            >
              Visit source code on GitHub.
            </Link>
          </Card.Footer>
        </Card>
      </Container>
    </HomePage>
  )
}

