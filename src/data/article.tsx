import { gql } from "graphql-request";
import { useQuery } from "react-query";
import { graphQLClient } from "./dataFetching";

interface Article {
  title: string;
  date: string;
  tags: { nodes: { name: string }[] };
  featuredImage: {
    node: {
      link: string;
    };
  };
}

export const useLastArticles = ({
  categoryName,
  number,
}: {
  categoryName: string;
  number: number;
}) => {
  return useQuery([`get-last-articles`, { categoryName, number }], async () => {
    const { posts } = await graphQLClient.request<{
      posts: { nodes: Article[] };
    }>(gql`query {
          posts(first: ${number}, where: {categoryName: "${categoryName}"}) {
            nodes {
              title
              date
              featuredImage {
                node {
                  link
                }
              }
              tags {
                nodes {
                  name
                }
              }
            }
          }
        }
      `);
    return posts;
  });
};

export const useArticle = (id: string) => {
  return useQuery([`get-article`, { id }], async () => {
    const { post } = await graphQLClient.request<{
      post: Article & { content: string; author: { node: { name: string } } };
    }>(gql`
      query {
        post(id: "${id}") {
          id
          title
          featuredImage {
            node {
              link
            }
          }
          author {
            node {
              name
            }
          }
          content
        }
      }
    `);
    return post;
  });
};
