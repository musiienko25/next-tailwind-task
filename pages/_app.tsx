// pages/_app.tsx
import "../styles/global.css"; // Import your global styles
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
