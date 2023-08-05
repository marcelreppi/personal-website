import { AppProps } from "next/app";

import "../styles/index.css";
import Umami from "../components/Umami";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Umami />
    </>
  );
}

export default MyApp;
