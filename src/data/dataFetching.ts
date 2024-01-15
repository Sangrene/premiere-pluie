import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { GraphQLClient, gql } from "graphql-request";

export const graphQLClient = new GraphQLClient("https://premierepluie.com/graphql", {
  headers: {
    Authorization: `Bearer ${process.env.API_KEY}`,
  },
});

export const queryClient = new QueryClient();

