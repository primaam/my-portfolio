import Head from "next/head";
import type { AppProps } from "next/app";
import "@/styles/globals.css";
import "@/styles/fonts.css";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Welcome to Prima's Website</title>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
                />
            </Head>
            <Component {...pageProps} />
        </>
    );
}
