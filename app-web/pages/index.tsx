import Head from "next/head";
import StitchesLogo from "../components/StitchesLogo";
import { styled } from "../stitches.config";
import {
  Container,
  Card,
  Text,
  Navbar,
  Button,
  Input,
} from "@nextui-org/react";
import { SunIcon, Link1Icon, MoonIcon } from "@radix-ui/react-icons";
import { useTheme as useNextTheme } from "next-themes";
import { ThemeToggle } from "../components/ThemeToggle";

const HomePage = styled("div", { fontFamily: "$system" });

export default function Home() {
  const { theme, setTheme } = useNextTheme();

  return (
    <HomePage>
      <Head>
        <title>Short-me</title>
      </Head>
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
          <Navbar.Item>
            <ThemeToggle />
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>

      <Container>
        <Text>Lorem Ipsum is simply dummy text of the </Text>
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry
        </Text>

        <Card>
          <Card>
            <Link1Icon />
            <Input underlined size="md" placeholder="Medium" />
            <Button>Link</Button>
          </Card>
        </Card>
      </Container>
    </HomePage>
  );
}
