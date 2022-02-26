import { useQuery } from "@apollo/client";
import { get } from "lodash";
import { GET_POKEMONS } from "../graphql/getPokemon";
import Card from "./Card";

const Dictionary = () => {
  const { loading, error, data } = useQuery(GET_POKEMONS, {
    variables: { first: 10 },
  });

  if (loading) return <div>loading...</div>;

  if (error) return <div>error...</div>;

  return (
    <div className="pt-2 bottom-0 overflow-y-auto ">
      <div className="flex flex-wrap w-11/12 mx-auto gap-8">
        {get(data, "pokemons", []).length > 0 &&
          data.pokemons.map((pokemon) => (
            <Card data={pokemon} key={pokemon.id} />
          ))}
      </div>
    </div>
  );
};

export default Dictionary;
