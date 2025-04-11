import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

function AxionApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Axion - Formal Verification meets LLM</title>
        <meta name="description" content="Translate natural language or LaTeX derivations into Lean theorems" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default AxionApp;
