// pages/_app.tsx

import { AppProps } from "next/app";
import "../app/globals.css";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}

export default MyApp;
