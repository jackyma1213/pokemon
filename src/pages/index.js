import Head from "next/head";
import Header from "../components/Header";
import Dictionary from "../components/Dictionary";
import { initializeApollo } from "../lib/apollo";
import { GET_POKEMONS } from "../graphql/getPokemon";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pokemon</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="min-h-screen bg-slate-800 text-slate-300">
        <Header />
        <Dictionary />
      </main>
    </div>
  );
}

export const getServerSideProps = async () => {
  const apolloClient = initializeApollo();
  await apolloClient.query({ query: GET_POKEMONS, variables: { first: 10 } });
  return { props: { initialApolloState: apolloClient.cache.extract() } };
};
