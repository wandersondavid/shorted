
import React from "react";
import { Grid, Link, Text, Card, Container, Input, Spacer, Button, styled } from "@nextui-org/react";
import { Link2Icon, CopyIcon, CheckIcon } from "@radix-ui/react-icons";
import { NavBar } from "../components/NavBar";
import { BackgroundHome } from "../components/background";

import { createClient } from '@supabase/supabase-js'



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

export default function Signin() {


  const supabaseUrl = 'https://fwlazinpzlcjitewlyrv.supabase.co'
  const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ3bGF6aW5wemxjaml0ZXdseXJ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njk1MTQwOTYsImV4cCI6MTk4NTA5MDA5Nn0.cKHB8ckycx3fhdEuN9xhnKBJy91Q-aojWMx4G1RCylw'
  const supabase = createClient(supabaseUrl, supabaseKey)

  async function signInWithGoogle() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    })

    console.log(data)
  }


  async function signout() {
    const { error } = await supabase.auth.signOut()
  }

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
            <Text h4>
              Bem vindo!
            </Text>
          </Card.Header>
          <Card.Body css={{ py: "$6" }}>
            <Input label="E-mail" placeholder="Digite seu E-mail" />
            <Spacer y={.6} />
            <Input.Password label="Senha" placeholder=" Digite sua Senha" />
            <Spacer y={.2} />
            <Spacer y={1} />
            <Button onClick={signInWithGoogle} color="secondary">Entrar</Button>

            <Link href="https://fwlazinpzlcjitewlyrv.supabase.co/auth/v1/callback">google</Link>
          </Card.Body>
        </Card>
      </Container>
    </HomePage>
  )
}

