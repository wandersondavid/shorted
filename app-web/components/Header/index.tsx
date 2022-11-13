import { Navbar } from "@nextui-org/react";
import { styled } from "../../stitches.config";
import StitchesLogo from "../StitchesLogo";
import { ThemeToggle } from "../ThemeToggle";

export const Header = () => {
  return (
    <Navbar isBordered>
      <Navbar.Brand>
        <StitchesLogo />
      </Navbar.Brand>
      <Navbar.Content>
        <Navbar.Link color="inherit" href="#">
          Developer
        </Navbar.Link>
        <Navbar.Link color="inherit" href="#">
          Contato
        </Navbar.Link>
        <Navbar.Item css={{ cursor: "pointer" }}>
          <ThemeToggle />
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  );
};
