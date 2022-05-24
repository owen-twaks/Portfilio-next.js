import Head from "next/head";
import Contact from "../components/Contact/Contact";
import NavBar from "../components/NavBar/NavBar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Contact | Owen Matsalani</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Contact />
    </>
  );
}
