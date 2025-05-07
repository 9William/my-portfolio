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
        <h1>Hello, Im Gerry William</h1>
        <p>Welcome to my Web Portfolio</p>
      </main>
    </>
  );
}
