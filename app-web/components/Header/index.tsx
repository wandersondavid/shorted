import NextLink from "next/link";
import { styled } from "../../stitches.config";
const Flex = styled("header", {});
const Logo = styled("img", {});
const Nav = styled("nav", {});
const ThemeToggle = styled("svg", {});
const Link = styled("a", {});

export const Header = () => {
  return (
    <Flex>
      <NextLink href="/" passHref>
        <Logo />
      </NextLink>
      <Nav>
        <Link>Developer</Link>
        <Link>contato</Link>
        <ThemeToggle />
      </Nav>
    </Flex>
  );
};
