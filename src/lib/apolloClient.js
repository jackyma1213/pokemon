import { ApolloClient, InMemoryCache } from "@apollo/client";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

const createApolloClient = () => {
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    uri: "https://graphql-pokemon2.vercel.app/",
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
