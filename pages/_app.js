import "tailwindcss/tailwind.css";
import "../components/Header";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <layout>
      <Head>
        <link
          rel="icon"
          type="image/png"
          href="/images/LVYP_White_Blue16x16.png"
          sizes="16x16"
        />
        <link
          rel="icon"
          type="image/png"
          href="/images/LVYP_White_Blue32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/images/LVYP_White_Blue96x96.png"
          sizes="96x96"
        />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </layout>
  );
}

export default MyApp;
