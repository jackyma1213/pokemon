import Head from "next/head";
import Header from "../components/Header";
import Dictionary from "../components/Dictionary";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pokemon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-slate-800 text-slate-300">
        <Header />
        <Dictionary />
      </main>
    </div>
  );
}
