import Head from "next/head";
import Contact from "../components/Contact/Contact";
import Header from "../components/Header/Header";
import NavBar from "../components/NavBar/NavBar";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";


export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio | Owen Matsalani</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Portfolio | owen Matsalani" />
        <meta
          property="og:image"
          content=""
        />
      </Head>
      
      <NavBar />
      <Header />
      <Skills />
      <Projects />
      <Contact />
      
    </>
  );
}
