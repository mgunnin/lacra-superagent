import React from "react";
import Head from "next/head";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const chakraTheme = extendTheme({
  styles: { global: { img: { maxWidth: "unset" } } },
  colors: {
    gray: {
      50: "#f7fafc",
      100: "#edf2f7",
      200: "#e2e8f0",
      300: "#cbd5e0",
      400: "#a0aec0",
      500: "#718096",
      600: "#4a5568",
      700: "#2c3748",
      800: "#1a202c",
      900: "#171923",
    },
    violet: {
      50: "#f1e5ff",
      100: "#d4b3ff",
      200: "#b880ff",
      300: "#9c4dff",
      400: "#7f1aff",
      500: "#7100ff",
      600: "#6600e6",
      700: "#4f00b3",
      800: "#380080",
      900: "#22004d",
    },
  },
});
const emotionCache = createCache({
  key: "emotion-cache",
  prepend: true,
});

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <title>SlicLabs</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />

        <style
          dangerouslySetInnerHTML={{
            __html: `@import url("https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;600;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap");
@font-face {
  font-family: "Akira Expanded";
  src: url("/public/Akira Super Bold.ttf");
  font-weight: 400;
}
@font-face {
  font-family: "Aquire";
  src: url("/public/Aquire Bold.otf");
  font-weight: 700;
}

body {
  margin: 0;
  line-height: normal;
}
`,
          }}
        />
      </Head>
      <CacheProvider value={emotionCache}>
        <ChakraProvider theme={chakraTheme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </CacheProvider>
    </React.Fragment>
  );
}

export default MyApp;
