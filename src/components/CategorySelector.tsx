import React from "react";
import { useQuery } from "react-query";
import { graphQLClient } from "../data/dataFetching";
import { gql } from "graphql-request";

const useGetCategories = () => {
  return useQuery("get-categories", async () => {
    const { categories } = await graphQLClient.request<{
      categories: { nodes: { id: string; name: string }[] };
    }>(gql`
      query {
        categories {
          nodes {
            id
            name
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
      {data?.nodes.map((node) => (
        <div
          className="rounded-full border-white border-2 py-2 px-4 m-1 hover:font-bold"
          key={node.id}
        >
          {node.name}
        </div>
      ))}
    </div>
  );
};

export default CategorySelector;
