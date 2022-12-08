import { Button, Link, Navbar, useTheme } from "@nextui-org/react";
import { LogoDark, LogoLigth } from "../Logo";
import { Text } from "../Text";
import { ThemeToggle } from "../ThemeToggle";


export const NavBar = () => {
  const { theme } = useTheme();

  return (
    <Navbar css={{
      background: 'transparent',
      '& > div':
        { background: "transparent !important", backdropFilter: 'initial !important' },

    }} disableShadow>
      <Navbar.Brand>
        {theme === "dark" ? <LogoDark /> : <LogoLigth />}
      </Navbar.Brand>
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
  );
};
