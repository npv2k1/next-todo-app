import Layout from "@/components/Layout";
import "bootstrap/dist/css/bootstrap.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    // <Layout>
    <Component {...pageProps} />
    // </Layout>
  );
}
