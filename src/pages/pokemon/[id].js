import { useRouter } from "next/router";
import { useQuery } from "@apollo/react-hooks";
import { initializeApollo } from "../../lib/apollo";
import { GET_POKEMON_BY_ID } from "../../graphql/getPokemon";
import Header from "../../components/Header";
import Main from "../../components/Main";

export default function Pokemon() {
  const router = useRouter();
  const { id } = router.query;
  const { loading, error, data } = useQuery(GET_POKEMON_BY_ID, {
    variables: { id },
  });

  if (data?.pokemon?.evolutions?.length > 0) {
    const evolutions = [];
    data.pokemon.evolutions.forEach(({ id }) => {
      const { loading, error, data } = useQuery(GET_POKEMON_BY_ID, {
        variables: { id },
      });
      if (data) evolutions.push(data);
    });
    console.log("evolutions", evolutions);
  }

  return (
    <>
      <Header />
      <Main>{data?.pokemon?.name}</Main>
    </>
  );
}

export const getServerSideProps = async (ctx) => {
  const { id } = ctx.query;

  const apolloClient = initializeApollo();
  await apolloClient.query({ query: GET_POKEMON_BY_ID, variables: { id } });

  return { props: { initialApolloState: apolloClient.cache.extract() } };
};
