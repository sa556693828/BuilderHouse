import theme from "@/components/theme";
import { ColorModeScript } from "@chakra-ui/react";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href={
            "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          }
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#13294b" />
        <meta property="og:title" content="Builder House" />
        <meta property="og:site_name" content="Builder House" />
        <meta
          property="og:url"
          content="https://www.taiwanbuilderhouse.com/main.png"
        />
        <meta property="og:description" content="Builder House" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.taiwanbuilderhouse.com/main.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="taiwanbuilderhouse.com" />
        <meta
          property="twitter:url"
          content="https://taiwanbuilderhouse.com/"
        />
        <meta name="twitter:title" content="Builder House" />
        <meta name="twitter:description" content="Builder House" />
        <meta
          name="twitter:image"
          content="https://taiwanbuilderhouse.com/main.png"
        />
      </Head>
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
