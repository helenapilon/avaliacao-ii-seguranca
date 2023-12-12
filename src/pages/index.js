import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Avaliação</title>
        <meta name="description" content="Segurança de Aplicações" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/if.png" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <p>Avaliação - Segurança de Aplicações - 2023/2</p>
        <div>
          <a href="/listagem"> Acessar a listagem de produtos </a>
        </div>
      </main>
    </>
  );
}
