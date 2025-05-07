import Image from "next/image";
import styles from "../styles/Home.module.css"
import stylesCenter from "../styles/centered.module.css"
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          My Portfolio
        </title>
      </Head>
      <main className={stylesCenter.centered}>
        <h1>Hello, I'm Gerry William</h1>
        <p>Welcome to my Web Portfolio</p>
      </main>
    </>
  );
}
