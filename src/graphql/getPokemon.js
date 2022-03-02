import { gql } from "@apollo/client";

export const GET_POKEMONS = gql`
  query pokemons($first: Int!) {
    pokemons(first: $first) {
      id
      number
      name
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
      classification
      types
      resistant
      weaknesses
      fleeRate
      maxCP
      maxHP
      image
    }
  }
`;

export const GET_POKEMON_BY_ID = gql`
  query pokemon($id: String) {
    pokemon(id: $id) {
      id
      number
      name
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
      classification
      types
      resistant
      weaknesses
      fleeRate
      maxCP
      maxHP
      image
    }
  }
`;
