
import React from "react";
import { Grid, Link, Text, Card, Container, Input, Spacer } from "@nextui-org/react";
import { Link2Icon, CopyIcon, CheckIcon } from "@radix-ui/react-icons";

export default function Home() {
  return (
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
          <Spacer y={1.6} />
          <Input.Password labelPlaceholder="Senha" initialValue="nextui123" />

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
  )
}

