import { Navbar, useTheme } from "@nextui-org/react";
import { styled } from "@stitches/react";
import { LogoDark, LogoLigth } from "../Logo";
import { Text } from "../Text";
import { ThemeToggle } from "../ThemeToggle";

const NavbarStyled = styled(Navbar, {

  boxShadow:'transparent',

  "& > div": { background: "transparent !important",  backdropFilter: 'initial !important' },
});

export const Header = () => {
  const { theme } = useTheme();

  return (
    <NavbarStyled disableShadow>
      <Navbar.Brand>
        {theme === "dark" ? <LogoDark /> : <LogoLigth />}
      </Navbar.Brand>
      <Navbar.Content>
        {/* <Navbar.Link color="inherit" href="#">
          <Text text="Developer" />
        </Navbar.Link> */}
        <Navbar.Link color="inherit" href="#">
          <Text text="Contato" />
        </Navbar.Link>
        <Navbar.Item css={{ cursor: "pointer" }}>
          <ThemeToggle />
        </Navbar.Item>
      </Navbar.Content>
    </NavbarStyled>
  );
};
