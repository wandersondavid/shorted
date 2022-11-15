import Head from "next/head";
import { styled } from "../stitches.config";
import {
  Container,
  Card,
  Text,
  Button,
  Input,
} from "@nextui-org/react";
import { Link1Icon } from "@radix-ui/react-icons";

import { Header } from "../components/Header";

const HomePage = styled("main", {});

export default function Home() {
  return (
    <HomePage>
      <Head>
        <title>Short-me</title>
      </Head>
      <Header />
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
