import Head from "next/head";
import { styled } from "../stitches.config";
import { Container, Button, Input, Spacer } from "@nextui-org/react";
import { Link2Icon, CopyIcon, CheckIcon } from "@radix-ui/react-icons";

import { Header } from "../components/Header";
import { Text } from "../components/Text";

import { BackgroundHome } from "../components/background";
import { useEffect, useState } from "react";
import { Footer } from "../components/footer";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import copy from 'copy-to-clipboard';

const ButtonStyled = styled(Button, {
  background: "$button !important",
  backgroundColor: "$button !important",
});

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
    zIndex: -1,

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
    zIndex: -1,
    "@media (max-width: 600px)": {
      top: "613px",
      width: "110px",
      left: "500px",
    },
  },
});

const CardContainer = styled("div", {
  maxWidth: "1008px",
  width: "100%",
  // maxHeight: "230px",
  // height: "230px",
  backgroundColor: "$cardContainer",
  display: "flex",
  borderRadius: "20px",
  justifyContent: "center",
  alignItems: "center",
  padding: "70px 20px",
  boxSizing: "border-box",
  flexDirection: 'column',
  "@media (max-width: 960px)": {
    maxWidth: "100%",
    width: "100% !important",
  },
  variants: {
    showInfo: {
      true: {
        padding: '70px 20px 50px'
      }
    }
  }
});
const CardInputTest = styled("div", {
  width: "100%",
  borderRadius: "15px",
  backgroundColor: "trasparent",
  "@media (max-width: 960px)": {
    backgroundColor: "$cardInput",
    height: "57px",
    display: "flex",
    justifyContent: 'start',
    paddingLeft: '5px',
    alignItems: 'center',
  },
});

const CardInput = styled("div", {
  maxWidth: "870px",
  maxHeight: "90px",
  height: "90px",
  width: "100%",
  borderRadius: "15px",
  backgroundColor: "$cardInput",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0px 36px",
  boxSizing: "border-box",
  "@media (max-width: 960px)": {
    backgroundColor: "transparent",
    maxWidth: "100%",
    maxHeight: "100%",
    height: "160px",
    width: "100% !important",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: "0px",
  },
});


const CardCopy = styled("div", {
  maxWidth: "570px",
  maxHeight: "45px",
  height: "45px",
  width: "100%",
  borderRadius: "30px",
  backgroundColor: "$cardInput",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0px 25px",
  boxSizing: "border-box",
});


const ContentButtonIcon = styled("div", {
  padding: '7px 7px 5px 7px',
  borderRadius: 8,
  backgroundColor: "$cardContainer",
  cursor: 'pointer',
  variants: {
    success: {
      true: {
        backgroundColor: "$greenbg",
      }
    }
  }
})

const InputStyled = styled(Input, {
  maxWidth: "590px !important",
  width: "590px !important",
  height: "57px  !important",
  color: "#AA99EC  !important",
  flex: 1,
  "& label": {
    "&::before": {
      content: "",
      width: "0",
      height: "0",
    },
    "&::after": {
      content: "",
      width: "0",
      height: "0",
    },
  },
  "@media (max-width: 960px)": {
    color: "red  !important",
    width: "300px !important",
  },
});

type Url = {
  serveUrl: string;
};

export default function Home(props: Url) {
  const [url, setUrl] = useState<string>('');
  const [shortLink, setShortLink] = useState<string>('');
  const [hasCopied, setHasCopied] = useState(false);
  const [isLink, setIsLink] = useState(true);


  useEffect(() => {
    setTimeout(() => {
      setIsLink(true)
    }, 2000)
  }, [isLink])


  const valideUrl = (params: string) => {
    try {

      new URL(params);
      setIsLink(true)

      return true
    } catch (error) {
      setShortLink('')
      setIsLink(false)
      return false
    }
  }


  const shortUrl = () => {
    setHasCopied(false)

    const valide = valideUrl(url)
    if (valide) {
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: "Token " },
        body: `{"data":{"originalLink":"${url}"}}`,
      };
      fetch(`${props?.serveUrl}/api/v1/shortener/link`, options)
        .then((response) => response.json())
        .then((response) => setShortLink(response.data.shortLink))
        .catch((err) => console.error(err));
    };
  }




  const onChange = (e: any) => {
    const value = e.target.value;
    setUrl(value);
  };

  return (
    <HomePage>
      <Head>
        <title>Shorten-link</title>
      </Head>
      <BackgroundHome />
      <Header />
      <Container
        css={{
          marginTop: 100,
          padding: 0,
          "@media (max-width: 960px)": {
            marginTop: 0,
          },
        }}
      >
        <Container
          css={{
            display: "flex",
            justifyContent: "center",
            padding: 0,
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Text
            as="h1"
            css={{
              textAlign: "center",
              fontSize: "50px",
              maxWidth: "740px",
              "@media (max-width: 600px)": {
                fontSize: "45px",
                textAlign: 'left'
              },
              "@media (max-width: 400px)": {
                fontSize: "35px",

              },
            }}
            text="Mais do que um encurtador de links"
          />
          <Text
            as="h2"
            token="$text100"
            css={{
              textAlign: "center",
              fontSize: "19px",
              maxWidth: "680px",
              marginBottom: "30px",
              "@media (max-width: 600px)": {
                textAlign: 'left'
              },
            }}
            text="Shorted é uma plataforma de gerenciamento de link permite que você saiba quais links estão gerando os melhores resultados."
          />
        </Container>
        <Container
          css={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            flexDirection: "column",
            alignItems: "center",
            padding: 0,
          }}
        >
          <CardContainer showInfo={!!shortLink || !isLink}>
            <CardInput>
              <CardInputTest>
                <InputStyled
                  underlined
                  placeholder="Cole o link a ser encurtada"
                  onChange={onChange}
                  status="secondary"
                  contentLeft={
                    <Link2Icon width="20px" height="20px" color="#AA99EC" />
                  }
                />
              </CardInputTest>
              <ButtonStyled
                onClick={shortUrl}
                css={{
                  width: "166px",
                  height: "57px",

                  "@media (max-width: 960px)": {
                    maxWidth: "100%",
                    width: "100% !important",
                  },
                }}
              >
                {" "}
                Encurtar link
              </ButtonStyled>
            </CardInput>
            <Spacer />
            {!isLink && <CardCopy><Text token="$purple500" as="p" text='URl invalida' /></CardCopy>}
            {shortLink && isLink &&
            <>
              <CardCopy>
                <Text token="$purple500" as="p" text={`${shortLink}`} />
                <ContentButtonIcon success={hasCopied} onClick={() => { copy(shortLink); setHasCopied(true); }}>
                  {hasCopied ? <CheckIcon width="20px" color="#41A777" /> : <CopyIcon width="20px" height="20px" color="#AA99EC" />}
                </ContentButtonIcon>
              </CardCopy>
               {false && <a href={`${shortLink}/status`} target='blank'><p>Ver o desempenho em tempo real.</p></a>}
              </>
            }
          </CardContainer>
        </Container>
      </Container>
      <Footer />
    </HomePage>
  );
}


export const getServerSideProps: GetServerSideProps = async ({ params }: GetServerSidePropsContext) => {

  const serveUrl = process.env.API_URL

  return {
    props: { serveUrl },
  }

}