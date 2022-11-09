import { Head, Html, Main, NextScript } from 'next/document'
import { darkTheme, getCssText, styled } from '../stitches.config'

const Body = styled('body', {
  backgroundColor: '$primary'
})


export default function MyDocument() {
  return (
    <Html lang="en">
      <Head>
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </Head>
      <Body className={darkTheme}>
        <Main />
        <NextScript />
      </Body>
    </Html>
  )
}
