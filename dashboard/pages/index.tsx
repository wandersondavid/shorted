
import React from "react";
import { Navbar, Button, Link, Text, Card, Radio } from "@nextui-org/react";
import { LogoLigth } from "../components/icons/Logo";


export default function Home() {
  return (
    <>
      <Navbar>
        <Navbar.Brand>
        <LogoLigth />
        </Navbar.Brand>
        <Navbar.Content hideIn="xs">
          <Navbar.Link href="#">Home</Navbar.Link>
          <Navbar.Link isActive href="#">Criar links</Navbar.Link>
          <Navbar.Link href="#">Versão pro</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Link color="inherit" href="#">
            Login
          </Navbar.Link>
          <Navbar.Item>
            <Button auto flat as={Link} href="#">
              Sign Up
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>

    </>
  )
}

