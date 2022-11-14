import { Navbar } from "@nextui-org/react";
import { styled } from "@stitches/react";
import StitchesLogo from "../StitchesLogo";
import { ThemeToggle } from "../ThemeToggle";

const NavbarStyled = styled(Navbar, {backgroundColor: '$navBar', background:'$navBar', '& > div': {background: "#ffffff00"}});

export const Header = () => {
  return (
    <NavbarStyled >
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
    </NavbarStyled>
  );
};
