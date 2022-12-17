
import React from "react";
import { Grid, Link, Text, Card, Container, Input, Spacer, Button, styled } from "@nextui-org/react";
import { NavBar } from "../components/NavBar";
import { BackgroundHome } from "../components/background";
import { useAuth } from "../hooks/auth";
import { GoogleIcon } from "../components/icons/google";

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

export default function Signup() {
  const { signInWithGoogle, signUpWithEmail } = useAuth();

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
            <Text h4 css={{color:'$gray800'}}>
              Bem vindo!
            </Text>
          </Card.Header>
          <Card.Body css={{ py: "$6" }}>
            <Button onClick={signInWithGoogle} css={{ backgroundColor: "$gray300", color: "$gray800" }} icon={<GoogleIcon />}>
              Cadastrar com Google
            </Button>
            <Spacer y={1} />
            <Text css={{width: '100%', textAlign: 'center', color:'$gray700'}}>- Ou -</Text>
            <Input label="E-mail" placeholder="Digite seu E-mail" />
            <Spacer y={.6} />
            <Input.Password label="Senha" placeholder="Digite sua Senha" />
            <Spacer y={.6} />
            <Input.Password label="Confirme sua senha" placeholder="Digite sua Senha novamente" />
            <Spacer y={.2} />
            <Spacer y={1} />
            <Button onClick={signUpWithEmail} color="secondary">Cadastra</Button>
          </Card.Body>
        </Card>
      </Container>
    </HomePage>
  )
}

