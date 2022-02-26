import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import Dictionary from "../components/Dictionary";
import { initializeApollo } from "../lib/apollo";
import { GET_POKEMONS } from "../graphql/getPokemon";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pokemon</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <Main>
        <Dictionary />
      </Main>
    </>
  );
}

export const getServerSideProps = async () => {
  const apolloClient = initializeApollo();
  await apolloClient.query({ query: GET_POKEMONS, variables: { first: 10 } });
  return { props: { initialApolloState: apolloClient.cache.extract() } };
};
