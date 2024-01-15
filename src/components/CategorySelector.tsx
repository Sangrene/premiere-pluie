import React from "react";
import { useQuery } from "react-query";
import { graphQLClient } from "../data/dataFetching";
import { gql } from "graphql-request";

const useGetCategories = () => {
  return useQuery("get-categories", async () => {
    const { categories } = await graphQLClient.request<{
      categories: { edges: { node: { id: string; name: string } }[] };
    }>(gql`
      query {
        categories {
          edges {
            node {
              name
            }
          }
        }
      }
    `);
    return categories;
  });
};

const CategorySelector = () => {
  const { data } = useGetCategories();
  return (
    <div className="flex flex-wrap">
      {data?.edges.map((edge) => (
        <div
          className="rounded-full border-white border-2 py-2 px-4 m-1 hover:font-bold"
          key={edge.node.id}
        >
          {edge.node.name}
        </div>
      ))}
    </div>
  );
};

export default CategorySelector;
