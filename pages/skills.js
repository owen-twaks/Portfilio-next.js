import Head from "next/head";
import NavBar from "../components/NavBar/NavBar";
import Skills from "../components/Skills/Skills";

export default function Skill() {
  return (
    <>
      <Head>
        <title>Skills | Owen Matsalani</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Skills />
    </>
  );
}
